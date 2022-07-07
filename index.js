const botoes = document.querySelectorAll(".bttn");
const display = document.querySelector(".display");
let acaoArmazenada = "";
let temp = 0;
let temp2 = 0;
let temPonto = false;
let ehNegativo = false;

botoes.forEach((elementoBotao) => {
  elementoBotao.addEventListener("click", (evento) => {
    apertouBotao(evento.target.dataset.valor);
  });
});
function apertouBotao(simbolo) {
  switch (simbolo) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      poeNumero(simbolo);
      break;
    case "/":
    case "x":
    case "+":
    case "-":
    case "=":
      processaAcao(simbolo);
      break;
    case ".":
      if (!temPonto) {
        poeNumero(simbolo);
        temPonto = true;
      } else {
        ocorreuErro();
      }
      break;
    case "C":
      limpaDisplay();
      limpaTemps();
      break;
  }
}
function poeNumero(x) {
  display.innerHTML = display.innerHTML + x;
}
function limpaDisplay() {
  display.innerHTML = "";
}
function processaAcao(acaoPassada) {
  if (acaoPassada != "=") {
    if (acaoArmazenada == "") {
      if (display.innerHTML == "" && acaoPassada == "-") {
        display.innerHTML = "-";
      } else {
        temp = pegaDisplay();
        acaoArmazenada = acaoPassada;
        temPonto = false;
        limpaDisplay();
      }
    } else {
      temp2 = pegaDisplay();
      temp = calculadora(temp, temp2, acaoArmazenada);
      limpaDisplay();
      mostraValor(temp);
      limpaDisplay();
      acaoArmazenada = acaoPassada;
    }
  } else {
    temp2 = pegaDisplay();
    if (!temp) {
      ocorreuErro();
    } else {
      temp = calculadora(temp, temp2, acaoArmazenada);
      mostraValor(temp);
    }
    acaoArmazenada = "";
  }
}
function calculadora(x, y, acao) {
  switch (acao) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "/":
      return x / y;
    case "x":
      return x * y;
  }
}
function mostraValor(valor) {
  console.log(valor);
  display.innerHTML = valor.toPrecision(3);
}
function limpaTemps() {
  temp = 0;
  temp2 = 0;
  acaoArmazenada = "";
  temPonto = false;
}
function ocorreuErro() {
  mostraValor("Erro");
  setInterval(limpaDisplay, 2000);
  limpaTemps();
}
function pegaDisplay() {
  return parseFloat(display.innerHTML);
}
