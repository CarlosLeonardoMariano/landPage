const mobileBtn = document.getElementById('mobile-btn');
const mobileMenu = document.getElementById('mobile_menu');
const remover_header = document.getElementById('remover_header')
const backdrop = document.getElementById('backdrop')



// Ao clicar no botão de abrir o menu

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active'); // Alterna a classe 'active' no mobile_menu
    mobileBtn.style.display = "none" // Oculta o botão de abrir
    backdrop.style.display = "block" // Exibe o backdrop
    document.body.style.cursor = "pointer" // Define o cursor como "pointer" em qualquer lugar da tela


});

// Ao clicar no botão de fechar o menu

remover_header.addEventListener('click', () => {
    mobileMenu.classList.remove('active') // Fecha o menu removendo a classe 'active'
    backdrop.style.display = "none" // Oculta o backdrop
    mobileBtn.style.display = "block" // Exibe o botão de abrir novamente
    document.body.style.cursor = "default" // Volta ao cursor padrão
});


// Fechar o menu se clicar fora dele
document.addEventListener('click', (event) => {
 // Verifica se o clique foi fora do menu e do botão de abrir
 if (!mobileMenu.contains(event.target) && !mobileBtn.contains(event.target)) {
    mobileMenu.classList.remove('active'); // Fecha o menu
    backdrop.style.display = "none"; // Oculta o backdrop
    mobileBtn.style.display = "block"; // Exibe o botão de abrir novamente
    document.body.style.cursor = "default"; // Volta ao cursor padrão
}});



