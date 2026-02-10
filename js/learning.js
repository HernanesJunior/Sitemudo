/**
 * Comunicação Acessível - Learning Logic
 * Handles the display of Libras signs using the webfont.
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇ'.split('');
    const numbers = '0123456789'.split('');

    // Greetings data - mapped to sequences of letters or special characters if the font supports them.
    // Since the font is mainly alphabet/numbers, we will simulate greetings by spelling them out or showing a placeholder.
    // We'll spell them out for now.
    const greetings = [
        { label: 'Oi', phrase: 'OI' },
        { label: 'Olá', phrase: 'OLA' },
        { label: 'Bom Dia', phrase: 'BOM DIA' },
        // { label: 'Tudo Bem?', phrase: 'TUDO BEM' } // Too long for a simple grid right now
    ];

    // --- DOM Elements ---
    const modal = document.getElementById('signs-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-modal');

    const btnAlphabet = document.getElementById('btn-alphabet');
    const btnGreetings = document.getElementById('btn-greetings');
    const btnNumbers = document.getElementById('btn-numbers');

    // --- Functions ---

    function openModal() {
        modal.style.display = "block";
        // Close when clicking outside
        window.onclick = function (event) {
            if (event.target == modal) {
                closeModalFunc();
            }
        }
    }

    function closeModalFunc() {
        modal.style.display = "none";
        window.onclick = null;
    }

    // Populate Modal with Grid Items
    function populateGrid(items, type) {
        modalBody.innerHTML = ''; // Clear previous content

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'sign-item';

            const signSpan = document.createElement('span');
            signSpan.className = 'sign-font';

            const labelSpan = document.createElement('span');
            labelSpan.className = 'sign-label';

            if (type === 'alphabet' || type === 'numbers') {
                // Direct mapping
                signSpan.textContent = item;
                labelSpan.textContent = item;

                // Specific adjustment for Ç if font doesn't support it directly, 
                // often it maps to C but with a movement. 
                // The font 'Libras 2016' might map Ç to a specific key, often 'Ç' or 'ç'.
                // We will trust standard mapping for now.
            } else if (type === 'greetings') {
                // For greetings, we might need a horizontal sequence of signs
                // But our grid is designed for single items.
                // We'll make a special card for phrases.
                card.style.gridColumn = "span 2"; // Make it wider
                signSpan.style.fontSize = "2.5rem";
                signSpan.style.letterSpacing = "0.2rem";

                signSpan.textContent = item.phrase; // e.g. "OI"
                labelSpan.textContent = item.label;
            }

            if (type === 'numbers') card.classList.add('number-item');

            card.appendChild(signSpan);
            card.appendChild(labelSpan);
            modalBody.appendChild(card);
        });
    }

    // --- Event Listeners ---

    if (btnAlphabet) {
        btnAlphabet.addEventListener('click', (e) => {
            e.preventDefault();
            modalTitle.textContent = "Alfabeto em Libras";
            populateGrid(alphabet, 'alphabet');
            openModal();
        });
    }

    if (btnNumbers) {
        btnNumbers.addEventListener('click', (e) => {
            e.preventDefault();
            modalTitle.textContent = "Números em Libras";
            populateGrid(numbers, 'numbers');
            openModal();
        });
    }

    if (btnGreetings) {
        btnGreetings.addEventListener('click', (e) => {
            e.preventDefault();
            modalTitle.textContent = "Cumprimentos (Soletrados)";
            populateGrid(greetings, 'greetings');
            openModal();
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }
});
