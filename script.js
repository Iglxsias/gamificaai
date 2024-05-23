let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")

function abreFechaMenu() {

    //menu fechado - tem a classe menu-fechado
    //menu aberto - nao tem a classe menu-aberto


    //se o menu contem a classe menu-fechado
    if (menu.classList.contains("menu-fechado")) {
        //abrir o menu - remover a classe menu-fechado
        menu.classList.remove("menu-fechado")

        //mostrar icones barras
        iconeBarras.style.display = "none"

        //esconder o icone do x
        iconeX.style.display = "inline"

    } else {
        //fechar o menu - adiconar a classe menu-fechado
        menu.classList.add("menu-fechado")

        //mostrar icones barras
        iconeBarras.style.display = "inline"

        //esconder o icone do x
        iconeX.style.display = "none"
    }
}

onresize = () => {
     //abrir o menu - remover a classe menu-fechado
     menu.classList.remove("menu-fechado")

     //mostrar icones barras
     iconeBarras.style.display = "none"

     //esconder o icone do x
     iconeX.style.display = "inline"
}

//carrosel
let banner = document.querySelector(".banner")

let slides = [
    "primeiro-banner",
    "segundo-banner",
    "terceiro-banner"
]

let slideAtual = 0

banner.classList.add(slides[slideAtual])

function mostrarProximoSlide() {
    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])

    if (slideAtual < 2) {
        //somar 1 na variavel slideAtual
        slideAtual++
    } else{
        //voltar para o primeiro banner
        slideAtual = 0
    }

    //mostrar slide de acordo com o slide atual
    banner.classList.add(slides[slideAtual])
}


function mostrarSlideAnterior() {
    //remover o slide anterior
    banner.classList.remove(slides[slideAtual])
   
    if (slideAtual > 0){
        //subtrair 1 na variavel slideAtual
        slideAtual--
    } else {
        slideAtual = 2
    }

    //mostrar slide de acordo com o slide atual 
    banner.classList.add(slides[slideAtual])
}

function selecionarSlide(indiceSlide) {
    //remove o slide atual
    banner.classList.remove(slides[slideAtual])
    
    //atualiza a variavel com o indice de slide selecionado 
    slideAtual = indiceSlide

    //mostra o slide selecionado e salvo na variavel slideAtual
    banner.classList.add(slides[slideAtual])
}