const formulario = document.querySelector(".contatos form");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#mensagem").value;

    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Mensagem:", mensagem);

    mensagemSucesso.textContent = `Obrigado, ${nome}! Recebemos sua mensagem.`;
    formulario.reset();

    setTimeout(function() {
    mensagemSucesso.textContent = "";
}, 3000);
});