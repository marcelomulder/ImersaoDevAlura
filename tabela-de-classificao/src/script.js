var rafa = {
  avatar:
    "https://image.freepik.com/darmowe-wektory/mloda-kobieta-avatar-postac-z-kreskowki-obrazek-profilowy_18591-55054.jpg",
  nome: "Julia",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  resultado: "none"
};
var paulo = {
  avatar:
    "https://pm1.narvii.com/6365/99a77da39c98bdc9b93bda9110649b5d8bb6f08f_hq.jpg",
  nome: "Roberto",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  resultado: "none"
};
var marcelo = {
  avatar:
    "https://i.pinimg.com/736x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg",
  nome: "Marcelo",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0,
  resultado: "none"
};
var jogadores = [rafa, paulo, marcelo];

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadoresNaTela(jogadores) {
  verificar();
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento +=
      "<tr class='" +
      jogadores[i].resultado +
      "'><td><img height='50px' src='" +
      jogadores[i].avatar +
      "'></td>";
    elemento += "<td>" + jogadores[i].nome + "<span id='emoji'>🏆</span></td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='excluirJogador(" + i + ")'>❌</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  for (j = 0; j < jogadores.length; j++) {
    jogador = jogadores[j];
    if (j != i) {
      jogador.derrotas++;
      jogador.pontos = calculaPontos(jogador);
    }
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador;
  for (j = 0; j < jogadores.length; j++) {
    jogador = jogadores[j];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadoresNaTela(jogadores);
}

function excluirJogador(i) {
  var jogador = jogadores[i];
  for (var i = 0; i < jogadores.length; i++) {
    if (jogadores[i] == jogador) {
      var indice = jogadores.indexOf(jogador);
      if (indice > -1) {
        jogadores.splice(indice, 1);
      }
    }
  }
  exibeJogadoresNaTela(jogadores);
}

function resetarPontos() {
  for (i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarJogador() {
  var novoJogador = document.getElementById("jogador").value;
  var avatar = document.getElementById("avatar").value;
  if (novoJogador != "") {
    if (avatar.endsWith(".jpg") || avatar.endsWith(".png")) {
      jogador.innerHTML = novoJogador;
      var novoJogador = {
        avatar: avatar,
        nome: novoJogador,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0,
        resultado: "none"
      };
      jogadores.push(novoJogador);
      novoJogador.pontos = calculaPontos(novoJogador);
      exibeJogadoresNaTela(jogadores);
    } else {
      alert("Endereço de imagem inválido");
    }
  } else {
    alert("O nome do jogador é obrigatório");
  }
  document.getElementById("jogador").value = "";
  document.getElementById("avatar").value = "";
}

function verificar() {
  var k = 0;
  var pontoMaximo = 0;
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].resultado = "none";
    if (jogadores[i].pontos > pontoMaximo) {
      pontoMaximo = jogadores[i].pontos;
      k = i;
    }
  }

  if (pontoMaximo != 0) {
    jogadores[k].resultado = "win";
  }
}
exibeJogadoresNaTela(jogadores);
