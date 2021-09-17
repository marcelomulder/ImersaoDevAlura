var listagem = document.getElementById("resultado1");

function InserirImagem() {
  var filmeInserido = document.getElementById("valor").value;
  //Impede o usuário de inserir espaços vazios e insere o link na lista
  if (filmeInserido != "") {
    listaFilmes.push(filmeInserido);
    document.getElementById("valor").value = "";

    MostrarLista(listaFilmes);
    console.log(listaFilmes.length);
  }
}
// Printa a lista na tela
function MostrarLista() {
  listagem.innerHTML = "";
  for (var i = 0; i < listaFilmes.length; i++) {
    listagem.innerHTML += "<img src=" + listaFilmes[i] + ">";
  }
}

var listaFilmes = [
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG",
  "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Her.jpg/220px-Her.jpg",
  "https://moviesense.files.wordpress.com/2020/03/ef766-exmachina1.jpg?w=1140"
];

MostrarLista(listaFilmes);
