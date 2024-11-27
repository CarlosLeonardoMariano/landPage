const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile_menu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active'); // Alterna a classe 'active' no mobile_menu
});

