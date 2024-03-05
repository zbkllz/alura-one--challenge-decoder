// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

//precisa de botao de copia
//precisa limpar o input quando o conteudo for copiado

//Mensagem de Teste: "pairaibenterns poberr enterncairair enterssenter dentersaifimesober enter tenterr fimesnailimeszaidober enterlenter coberm sufatcenterssober"

const buttonEncrypt = document.getElementById("button-encrypt");
const buttonDecrypt = document.getElementById("button-decrypt");
const buttonCopy = document.getElementById("button-copy");
buttonCopy.style.display = "none";

buttonEncrypt.onclick = () => {
  const textEntry = document.getElementById("input-txt-area").value;
  const outputArea = document.getElementById("output-area");
  const outputAreaText = document.getElementById("output-txt-area");
  const hidePicture = document.getElementById("hidden1");
  const hideMsg = document.getElementById("hidden2");
  const arrayListText = textEntry.split("");
  const arrayListEncrypt = [];

  for (let i = 0; i < arrayListText.length; i++) {
    if (arrayListText[i] === "a") {
      arrayListEncrypt.push("ai");
    } else if (arrayListText[i] === "e") {
      arrayListEncrypt.push("enter");
    } else if (arrayListText[i] === "i") {
      arrayListEncrypt.push("imes");
    } else if (arrayListText[i] === "o") {
      arrayListEncrypt.push("ober");
    } else if (arrayListText[i] === "u") {
      arrayListEncrypt.push("ufat");
    } else {
      arrayListEncrypt.push(arrayListText[i]);
    }
  }

  hidePicture.style.display = "none";
  hideMsg.style.display = "none";
  buttonCopy.style.display = "block";
  outputArea.style.justifyContent = "start";

  outputAreaText.innerHTML = arrayListEncrypt.join("");
};

buttonDecrypt.onclick = () => {
  const textEntry = document.getElementById("input-txt-area").value;
  const outputArea = document.getElementById("output-area");
  const outputAreaText = document.getElementById("output-txt-area");
  const hidePicture = document.getElementById("hidden1");
  const hideMsg = document.getElementById("hidden2");

  const decrypt = textEntry
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  hidePicture.style.display = "none";
  hideMsg.style.display = "none";
  buttonCopy.style.display = "block";
  outputArea.style.justifyContent = "start";

  outputAreaText.innerHTML = decrypt;
};

buttonCopy.onclick = () => {
  const inputTextArea = document.getElementById("input-txt-area");
  const outputAreaText = document.getElementById("output-txt-area");

  // Garantindo que finalmente essa disgrama funciona
  outputAreaText.focus();
  outputAreaText.setSelectionRange(0, outputAreaText.value.length);

  const successful = document.execCommand("copy");
  if (successful) {
    alert("Texto copiado para a área de transferência!");
    inputTextArea.value = "";
  } else {
    alert("Erro ao copiar texto para a área de transferência.");
  }
};
