const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


function validarTexto(){
  let textoOriginal = document.querySelector(".text-area").value;
  let match = textoOriginal.match(/^[a-z ]*$/);

  if(!match || match === 0) {
    alert("Solo son permitidas letras minúsculas y sin tildes")
    location.reload();
    return true;
  }
}


function encriptar(stringEncriptada){
  let textoEncriptado = "";
  for (let i = 0; i < stringEncriptada.length; i++) {
    switch (stringEncriptada[i]) {
      case "e":
        textoEncriptado += "enter";
        break;
      case "i":
        textoEncriptado += "imes";
        break;
      case "a":
        textoEncriptado += "ai";
        break;
      case "o":
        textoEncriptado += "ober";
        break;
      case "u":
        textoEncriptado += "ufat";
        break;
      default:
        textoEncriptado += stringEncriptada[i];
    }
  }
  return textoEncriptado;
}

function desencriptar(texto){

  texto = texto.replaceAll("enter", "e");
  texto = texto.replaceAll("imes", "i");
  texto = texto.replaceAll("ai", "a");
  texto = texto.replaceAll("ober", "o");
  texto = texto.replaceAll("ufat", "u");

  return texto;
}

function btnEncriptar(){
  if(!validarTexto()) {
    const nuevoTexto = encriptar(textArea.value)
    mensaje.value = nuevoTexto
    mensaje.style.backgroundImage = "none"
    textArea.value = "";
    copia.style.display = "block"

  }
}


function btnDesencriptar(){
  const desencriptadoTexto = desencriptar(textArea.value)
  mensaje.value = desencriptadoTexto
  textArea.value = "";

}



function copiar(){
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value = "";
  alert("Texto Copiado")
}



