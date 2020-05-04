function hiddenElements() {
    var element = this.nextElementSibling;
    if (element.hidden == false){
        element.hidden = true;
        this.textContent = "Reveal Spoilers";
    }else{
        element.hidden = false;
        this.textContent = "Hide Spoilers";
    }
}

var vetorOBotao = document.getElementsByClassName("spoilerButton");
console.log(vetorOBotao.length);
if (vetorOBotao.length > 0) {
    for (let index = 0; index < vetorOBotao.length; index++) {
        vetorOBotao[index].addEventListener("click", hiddenElements, false);
    }
}
