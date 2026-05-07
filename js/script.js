// Inicializa AOS
AOS.init({ duration: 800, once: true, offset: 80 });

// Header scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 5px 25px rgba(0,0,0,0.1)';
  } else {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
  }
});

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
  const icon = menuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Fecha menu ao clicar em link
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  });
});

// Formulário envia para WhatsApp
const form = document.getElementById('formContato');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const nome = data.get('nome');
  const telefone = data.get('telefone');
  const email = data.get('email');
  const segmento = data.get('segmento');
  const mensagem = data.get('mensagem') || 'Sem mensagem adicional.';

  const texto = `Olá, RURALIN! Quero solicitar um diagnóstico.%0A%0A` +
                `*Nome:* ${nome}%0A` +
                `*WhatsApp:* ${telefone}%0A` +
                `*E-mail:* ${email}%0A` +
                `*Segmento:* ${segmento}%0A` +
                `*Mensagem:* ${mensagem}`;

  window.open(`https://wa.me/5564992266886?text=${texto}`, '_blank');
});
