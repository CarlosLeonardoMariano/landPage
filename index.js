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


const home = document.querySelector('.home');

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((procurar) => {
        if (procurar.isIntersecting) {
            procurar.target.classList.add('show');
        } else {
            procurar.target.classList.remove('show');
        }
    });
});

myObserver.observe(home);


const navItens = document.querySelector('.header');

const header = new IntersectionObserver( (entries) => {
    entries.forEach( (procurar) => {
        if(procurar.isIntersecting) {
            procurar.target.classList.add('show2')
        } else {
            procurar.target.classList.remove('show2')
        }
    })

})

header.observe(navItens)


        const h2_menu = document.getElementById('h2_menu')

        const textH2 = new IntersectionObserver( (entries) => {
            entries.forEach( (procurar)=> {
                if(procurar.isIntersecting){
                    procurar.target.classList.add('show4')
                } else {
                    procurar.target.classList.remove('show4')
                }

            })
        })

textH2.observe(h2_menu)


const testeavaliacao = document.querySelector('.testeavaliacao')

const comentarios = new IntersectionObserver( (entries) => {
    entries.forEach( (procurar) => {
        if(procurar.isIntersecting){
            procurar.target.classList.add('show6')
        } else {
            procurar.target.classList.remove('show6')

        }
    })
})

comentarios.observe(testeavaliacao)




