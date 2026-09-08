const botaoMenu = document.querySelector(".menu-hamburguer");
const menu = document.querySelector("header nav");
botaoMenu.addEventListener("click", function() {
    menu.classList.toggle("menu-aberto");
    
})