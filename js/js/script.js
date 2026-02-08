const dadosFuncionalidades = [
    {
        "titulo": "Tradução de Texto",
        "descricao": "Digite o texto e veja a tradução em Libras."
    },
    {
        "titulo": "Reconhecimento de Voz",
        "descricao": "Fale e veja o texto traduzido para Libras."
    },
    {
        "titulo": "Lições de Libras",
        "descricao": "Aprenda Libras com lições interativas e exercícios."
    },
    {
        "titulo": "Frases",
        "descricao": "Acesse frases e expressões comuns em Libras."
    },
    {
        "titulo": "Recursos",
        "descricao": "Encontre materiais e ferramentas úteis."
    }
];

const funcionalidades = document.querySelector('.funcionalidades .grid');

dadosFuncionalidades.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${item.titulo}</h3><p>${item.descricao}</p>`;
    funcionalidades.appendChild(div);
});

// Exemplo de interação: mudar o texto do botão ao clicar
const botaoTraduzir = document.querySelector('.destaque .botao:first-child');
botaoTraduzir.addEventListener('click', () => {
    botaoTraduzir.textContent = 'Indo para o tradutor...';
});

// Exemplo de animação: adicionar uma classe para animar o banner
const banner = document.querySelector('.destaque');
setTimeout(() => {
    banner.classList.add('animado');
}, 500);

// Exemplo de rolagem suave para as seções
const linksMenu = document.querySelectorAll('nav a');
linksMenu.forEach(link => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault();
        const destino = document.querySelector(link.getAttribute('href'));
        destino.scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
});