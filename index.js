document.getElementById("mobile-btn").addEventListener("click", function() {
    document.getElementById("mobile_menu").classList.toggle("active");
    document.getElementById("backdrop").style.display = "block";  // Exibe o fundo semitransparente
    document.getElementById("mobile-btn").style.display = "none"
});

document.getElementById("remover_header").addEventListener("click", function() {
    document.getElementById("mobile_menu").classList.remove("active");
    document.getElementById("backdrop").style.display = "none";  // Oculta o fundo
    document.getElementById('mobile-btn').style.display = "block"
});



