/**
 * Comunicação Acessível - Core Logic
 * Handles Text-to-Speech (TTS) and Speech-to-Text (STT)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const synth = window.speechSynthesis;
    const voiceSelect = document.getElementById('voiceSelect');
    const textInput = document.getElementById('txt');
    const rate = document.getElementById('rate');
    const rateValue = document.querySelector('.rate-value');
    const pitch = document.getElementById('pitch');
    const pitchValue = document.querySelector('.pitch-value');
    const speakBtn = document.getElementById('speak-btn');
    const recordBtn = document.getElementById('start-record-btn');
    const statusMsg = document.getElementById('status-msg');

    let voices = [];
    let recognition = null;

    // --- Text-to-Speech (TTS) Logic ---

    function populateVoiceList() {
        if (!voiceSelect) return;

        voices = synth.getVoices().sort((a, b) => {
            const aname = a.name.toUpperCase();
            const bname = b.name.toUpperCase();
            if (aname < bname) return -1;
            else if (aname == bname) return 0;
            return +1;
        });

        // Use a Set to avoid duplicates if any (sometimes happens in browsers)
        const uniqueVoices = new Set();
        voiceSelect.innerHTML = '';

        // Prioritize PT-BR voices
        voices.forEach((voice) => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.setAttribute('data-lang', voice.lang);
            option.setAttribute('data-name', voice.name);
            
            // Set default voice (preference for Google Português do Brasil or Microsoft Maria)
            if (voice.lang === 'pt-BR') {
               // Prioritize this option by prepending or selecting it
               if (!voiceSelect.value) {
                   option.selected = true;
               }
            }
            voiceSelect.appendChild(option);
        });
    }

    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }

    function speak() {
        if (!textInput || !textInput.value.trim().length) {
             showStatus("Por favor, digite algum texto para falar.", "error");
             return;
        }

        if (synth.speaking) {
            console.error('speechSynthesis.speaking');
            synth.cancel(); // Stop if already speaking
            showStatus("Leitura interrompida.");
            return;
        }

        const utterThis = new SpeechSynthesisUtterance(textInput.value);

        utterThis.onend = function (event) {
            console.log('SpeechSynthesisUtterance.onend');
            showStatus("Leitura concluída.");
        };

        utterThis.onerror = function (event) {
            console.error('SpeechSynthesisUtterance.onerror');
            showStatus("Erro na leitura.", "error");
        };

        const selectedOption = voiceSelect.selectedOptions[0]?.getAttribute('data-name');
        
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
                break;
            }
        }
        
        utterThis.pitch = pitch.value;
        utterThis.rate = rate.value;
        
        synth.speak(utterThis);
        showStatus("Lendo texto...");
    }

    if (speakBtn) {
        speakBtn.addEventListener('click', (e) => {
            e.preventDefault();
            speak();
        });
    }

    // Update Slider Values
    if (rate) {
        rate.addEventListener('change', () => { rateValue.textContent = rate.value; });
         // Init value
        if(rateValue) rateValue.textContent = rate.value;
    }
    if (pitch) {
        pitch.addEventListener('change', () => { pitchValue.textContent = pitch.value; });
        if(pitchValue) pitchValue.textContent = pitch.value;
    }
    
    if (voiceSelect) {
        voiceSelect.addEventListener('change', () => {
             // Optional: automatically speak when voice changes? usually annoying.
             // speak(); 
        });
    }

    // --- Speech-to-Text (STT) Logic ---

    // Check browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.lang = 'pt-BR'; // Default to Portuguese
        recognition.continuous = false; // Stop after one sentence
        recognition.interimResults = false;

        recognition.onstart = function() {
            showStatus("Ouvindo... Fale agora.", "success");
            if (recordBtn) recordBtn.classList.add('recording'); // Add visual cue
        };

        recognition.onspeechend = function() {
            showStatus("Processando áudio...");
            recognition.stop();
            if (recordBtn) recordBtn.classList.remove('recording');
        };

        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            if (textInput) {
                // Append or replace? Let's append for conversation flow
                const currentText = textInput.value;
                textInput.value = currentText ? currentText + " " + transcript : transcript;
            }
            showStatus("Texto reconhecido!");
        };

        recognition.onerror = function(event) {
            showStatus("Erro no reconhecimento de voz: " + event.error, "error");
             if (recordBtn) recordBtn.classList.remove('recording');
        };
    } else {
        if (recordBtn) {
            recordBtn.disabled = true;
            recordBtn.title = "Seu navegador não suporta reconhecimento de voz.";
        }
    }

    if (recordBtn) {
        recordBtn.addEventListener('click', () => {
             if (recognition) {
                 try {
                     recognition.start();
                 } catch (e) {
                     // Sometimes it throws if already started
                     recognition.stop();
                 }
             } else {
                 showStatus("Navegador não suportado.", "error");
             }
        });
    }

    // --- Helper ---
    function showStatus(msg, type = 'info') {
        if (!statusMsg) return;
        statusMsg.textContent = msg;
        statusMsg.style.color = type === 'error' ? '#ef4444' : (type === 'success' ? '#22c55e' : '#94a3b8');
        
        // Clear after 3 seconds
        setTimeout(() => {
            if(statusMsg.textContent === msg) statusMsg.textContent = '';
        }, 3000);
    }
});
