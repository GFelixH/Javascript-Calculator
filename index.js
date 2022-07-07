const botoes = document.querySelectorAll(".bttn");
const display = document.querySelector(".display");
let acaoArmazenada = "";
let temp = 0;
let temp2 = 0;

botoes.forEach((elementoBotao) => {
  elementoBotao.addEventListener("click", (evento) => {
    // console.log(evento.target.dataset.valor);
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
      //   console.log("divisao");
      break;
    case "x":
      //   console.log("multiplicacao");
      break;
    case "+":
    case "-":
    case "=":
      processaAcao(simbolo);
      break;
    case ".":
      console.log("ponto");
      break;
    case "C":
      console.log("clear");
      limpaDisplay();
      limpaTemps();
      break;
  }
}
function poeNumero(x) {
  //   console.log(display.innerHTML);
  display.innerHTML = display.innerHTML + x;
  //   console.log(display.innerHTML);
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
      //se primeira armazena N A
      temp = parseFloat(display.innerHTML);
      acaoArmazenada = acaoPassada;
      limpaDisplay(); //prox entrada de N
    } else {
      console.log("nao eh a primeira vez");
      //se nao primeira
      //tem N e A armazenados e um novo N
      temp2 = parseFloat(display.innerHTML); //pega novo N
      temp = calculadora(temp, temp2, acaoArmazenada); //calcula N a Novo N
      limpaDisplay(); //limpa novo N
      mostraValor(temp); //mostra NAN
      limpaDisplay(); //limpa NAN
      //tenho NAN e A novo acaoPassada
      acaoArmazenada = acaoPassada;
    }
  } else {
    console.log("eh =");
    temp2 = parseFloat(display.innerHTML);
    if (!temp) {
      mostraValor("Erro");
      setInterval(limpaDisplay, 2000);
      limpaTemps();
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
    default:
      console.log("default da calculadora");
      break;
  }
}
function mostraValor(valor) {
  display.innerHTML = valor;
}
function limpaTemps() {
  temp = 0;
  temp2 = 0;
  acaoArmazenada = "";
}
