const botoes = document.querySelectorAll(".bttn");
const display = document.querySelector(".display");
let acaoArmazenada = "";
let temp = 0;
let temp2 = 0;
let temPonto = false;

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
    console.log("acaoPassada nao eh igual");
    //aqui a  acaoPassada eh / * - +
    if (acaoArmazenada == "") {
      console.log("Primeira Chamada");
      temp = parseFloat(display.innerHTML);
      acaoArmazenada = acaoPassada;
      temPonto = false;
      limpaDisplay();
    } else {
      console.log("nao eh a primeira vez");
      temp2 = parseFloat(display.innerHTML);
      temp = calculadora(temp, temp2, acaoArmazenada);
      limpaDisplay();
      mostraValor(temp);
      limpaDisplay();
      acaoArmazenada = acaoPassada;
    }
  } else {
    console.log("eh =");
    temp2 = parseFloat(display.innerHTML);
    if (!temp) {
      ocorreuErro();
    } else {
      console.log("temp");
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
    default:
      console.log("default da calculadora");
      break;
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
