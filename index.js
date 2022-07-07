const botoes = document.querySelectorAll(".bttn");
const display = document.querySelector(".display");

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
      console.log(simbolo);
      poeNumero(simbolo);
      break;
    case "/":
      console.log("divisao");
      break;
    case "x":
      console.log("multiplicacao");
      break;
    case "+":
      console.log("adicao");
      break;
    case "-":
      console.log("subtracao");
      break;
    case ".":
      console.log("ponto");
      break;
    case "C":
      console.log("clear");
      limpaDisplay();
      break;
    case "=":
      console.log("igual");
      break;
  }
}
function poeNumero(x) {
  console.log(display.innerHTML);
  display.innerHTML = display.innerHTML + x;
  console.log(display.innerHTML);
}
function limpaDisplay() {
  display.innerHTML = "";
}
