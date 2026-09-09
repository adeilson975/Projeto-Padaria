const botaoMenu = document.querySelector(".menu-hamburguer");
const menu = document.querySelector("header nav");
const iconeMenu = botaoMenu.querySelector("i");

botaoMenu.addEventListener("click", function() {
    menu.classList.toggle("menu-aberto");

    iconeMenu.classList.toggle("fa-xmark");
    iconeMenu.classList.toggle("fa-bars");
    
})