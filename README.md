# 🗣️ Voz para Todos - Comunicação Acessível

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Status](https://img.shields.io/badge/status-Active-success.svg) ![Web Speech API](https://img.shields.io/badge/API-Web_Speech-orange)

> **"Dando voz a quem precisa e ouvidos a quem quer escutar."**

O **Voz para Todos** é uma aplicação web moderna e acessível projetada para quebrar barreiras de comunicação entre pessoas surdas, mudas e ouvintes. A plataforma oferece ferramentas de conversão de texto-para-voz (TTS) e voz-para-texto (STT), além de recursos educativos sobre Libras (Língua Brasileira de Sinais).

---

## 🚀 Funcionalidades Principais

### 🔊 Texto para Voz (Text-to-Speech)
Digite qualquer mensagem e ouça-a ser falada instantaneamente.
- **Vozes Naturais**: Suporte para múltiplas vozes e idiomas (foco em pt-BR).
- **Controle Total**: Ajuste a velocidade (rate) e o tom (pitch) da fala.

### 🎤 Reconhecimento de Voz (Speech-to-Text)
Fale no microfone e veja sua fala convertida em texto em tempo real.
- Ideal para pessoas surdas lerem o que está sendo dito em uma conversa.

### 📚 Aprendizado de Libras
Seção dedicada ao ensino básico da Língua Brasileira de Sinais.
- Introdução ao Alfabeto Manual.
- Cumprimentos e Números.
- Links para recursos externos (VLibras).

### 🎨 Design Premium (Dark Glassmorphism)
- Interface moderna com tema escuro e efeitos de vidro (glassmorphism).
- Totalmente **responsivo** para celulares, tablets e desktops.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estrutura acessível e organizada.
- **CSS3 Moderno**:
  - Variáveis CSS (`:root`) para fácil manutenção.
  - **Flexbox & Grid** para layouts responsivos.
  - Estilização **Glassmorphism** (efeitos de desfoque e transparência).
- **JavaScript (ES6+)**:
  - **Web Speech API**: API nativa do navegador para síntese e reconhecimento de voz.
  - Manipulação de DOM otimizada.

---

## 📂 Estrutura do Projeto

```
Sitemudo/
├── css/
│   └── style.css       # Estilos globais e tema dark/glass
├── js/
│   └── script.js       # Lógica de TTS e STT
├── img/                # (Opcional) Imagens e ícones
├── index.html          # Página Inicial (Landing Page)
├── tradutor.html       # Ferramenta Principal (Voz <-> Texto)
├── aprendizado.html    # Área Educativa (Libras)
├── sobre.html          # Informações do Projeto
└── README.md           # Documentação
```

---

## 🚦 Como Usar

1. **Clone ou Baixe** este repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
   - *Nota: O reconhecimento de voz (STT) funciona melhor no Google Chrome e Edge.*
3. Navegue até a aba **Ferramenta Voz** (`tradutor.html`).
   - Para **falar**: Clique em "Falar (STT)" e permita o uso do microfone.
   - Para **ouvir**: Digite um texto e clique em "Ouvir Texto".

---

## 🌟 Melhorias Recentes (v2.0)

- [x] **Redesign Completo**: Migração para tema escuro com glassmorphism.
- [x] **Refatoração de Código**: Separação clara entre HTML, CSS e JS.
- [x] **Novo Recurso**: Adicionado suporte a Reconhecimento de Voz (STT).
- [x] **Responsividade**: Menu mobile e grids adaptáveis implementados.

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Faça um Fork do projeto.
2. Crie uma Branch para sua Feature (`git checkout -b feature/NovaFeature`).
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`).
4. Push para a Branch (`git push origin feature/NovaFeature`).
5. Abra um Pull Request.

---

&copy; 2025 Comunicação Acessível. Desenvolvido com ❤️ e acessibilidade em mente.
