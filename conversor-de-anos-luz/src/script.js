//Converte Dolar para Real
function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmKmNumerico = parseFloat(valor);
  var valorEmAnosLuz = valorEmKmNumerico / 9460528404879.4;
  var tempoDeChegada = valorEmKmNumerico / 1079252848.8;

  //Envio da informação para o HTML
  var elementoValorConvertio = document.getElementById("valorConvertido");
  var valorConvertido =
    "O resultado " +
    valorEmAnosLuz +
    " Ano-Luz.\nO tempo para chegar é de " +
    tempoDeChegada +
    " horas.";
  elementoValorConvertio.innerHTML = valorConvertido;
}

/*Desafios 
Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
Conversor de temperaturas entre farenheit, kelvin e celcius.
Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
*/
