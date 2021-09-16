var numeroSecreto = parseInt(Math.random() * 11); // Gerador do número a ser adivinhado
var i = 3; //inicialização do contador de tentativas

function Chutar() {
  var elementoResultado = document.getElementById("resultado1");
  var elementoTentativas = document.getElementById("resultado2");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
    elementoTentativas.innerHTML = "PARABÉNS!! ";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    //Faz a contagem das tentativas e informa ao usuário
    if (chute > numeroSecreto) {
      console.log(i);
      i = i - 1;
      elementoResultado.innerHTML = "Você errou! O número é menor que " + chute;
      elementoTentativas.innerHTML = "Você possue mais " + i + " tentativas.";
    } else {
      console.log(i);
      i = i - 1;
      elementoResultado.innerHTML = "Você errou! O número é maior que " + chute;
      elementoTentativas.innerHTML = "Você possue mais " + i + " tentativas.";
    }
  }
  // Condição de fim de jogo e impedimento de continuar.
  if (i <= 0) {
    elementoResultado.innerHTML = "Você errou! GAME OVER!!";
    elementoTentativas.innerHTML = "Aperte Run para jogar novamente.";
  }
}
