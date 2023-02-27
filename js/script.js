let title = document.querySelector(".title");
let container = document.querySelector("#container")
let btnSend = document.querySelector("#btn-send")
let messageErro = document.querySelector(".message-erro")
let input = document.querySelector("#inputCor");

// COLOCANDO UM EVENTO PARA BLOQUEAR CARACTERES ESPECIAIS
input.addEventListener("keypress", function(e) {
    if(!checkChar(e)) {
        e.preventDefault();
  }
});
function checkChar(e) {
    var char = String.fromCharCode(e.keyCode);
    var pattern = '[a-zA-Z0-9#]';

    if (char.match(pattern)) {
      return true
  }
}

// FUNÇÃO DE CLICK NO BOTÃO ENVIAR
function colorChange(){

    let input = document.querySelector("#inputCor");
    let conteudo = input.value.toLowerCase();

    if(conteudo === "" || conteudo === null){
        alert("Preencha o campo!")

    } else{

        title.innerHTML = `A cor escrita foi: <span style="border-bottom: 1px black solid">${conteudo.toLowerCase()}</span>`
        input.value = ""
        input.focus()
        container.style.background = conteudo
        input.style.border = "1px solid black"
        input.style.background = "white"
    }
}

// ATIVANDO A TECLA ENTER NO BOTÃO ENVIAR
document.addEventListener("keypress", function(e){
    if (e.key === 'Enter'){
        btnSend.click();
    }
})


1
"1"