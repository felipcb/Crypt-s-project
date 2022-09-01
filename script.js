var inputTexto = document.querySelector(".input-texto");
var mensagem = document.querySelector("#mensagem");
var buttonCriptografar = document.querySelector("#btnCriptografar");
var buttonDescriptografar = document.querySelector("#btnDescriptografar");
var buttonCopiado = document.querySelector("#btnCopiar");
// var inputTexto = document.querySelector(".input-texto");
// var mensagem = document.querySelector(".mensagem");
// var btnEncripitar = document.querySelector("btnEncripitar");

// var btnEncriptar = document.querySelector(".btnEncriptar")

// function btnEncriptar() {
//     const textoEncriptado = encriptar(inputTexto.value)
//     mensagem.value = textoEncriptado
// }

function encriptar (stringEncripitada) {
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncripitada = stringEncripitada.toLowerCase();

    for(var i=0; i < matrizCodigo.length; i++) {
        if( stringEncripitada.includes(matrizCodigo[i] [0])) {
            stringEncripitada=stringEncripitada.replaceAll(matrizCodigo[i] [0], matrizCodigo[i][1]);
        }
    }
    return stringEncripitada;
}

function criptografar() {
    console.log(inputTexto.value);
    document.getElementById("mensagem").textContent = "   " + encriptar(inputTexto.value);
    
}

function desencriptar (stringDecifra) {
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecifra = stringDecifra.toLowerCase();

    for(var i=0; i < matrizCodigo.length; i++) {
        if (stringDecifra.includes(matrizCodigo[i] [0])) {
            stringDecifra = stringDecifra.replaceAll(matrizCodigo[i][1], matrizCodigo [i][0]);
        }
    }
    return stringDecifra;
}

function descriptografar () {
    console.log("chamou?");
    document.getElementById("mensagem").textContent = "   " + desencriptar(inputTexto.value);    
}

buttonCriptografar.onclick = criptografar;
buttonDescriptografar.onclick = descriptografar;

var copy = document.getElementById("mensagem");


buttonCopiado.onclick = function () {
    var text = mensagem.value;
    mensagem.select();
    navigator.clipboard.writeText(text);
}
