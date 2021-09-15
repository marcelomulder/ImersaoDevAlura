//Converte Dolar para Real
function ConverterReal() {
  //Pegar o valor em dolar do HTML
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;

  //Transformando o conteúdo da variável de string para float
  var valorEmDolarNumerico = parseFloat(valor);

  //Conversão propriamente dita
  var valorEmReal = valorEmDolarNumerico * 5.25;

  //Envio da informação para o HTML
  var elementoValorConvertio = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal + ".";
  elementoValorConvertio.innerHTML = valorConvertido;
}

//Converte Dolar para Euro
function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmEuro = valorEmDolarNumerico * 0.85;
  var elementoValorConvertio = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em euro é € " + valorEmEuro + ".";
  elementoValorConvertio.innerHTML = valorConvertido;
}

//Converte Dolar para Libra
function ConverterLibra() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmLibra = valorEmDolarNumerico * 0.72;
  var elementoValorConvertio = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em libra é £ " + valorEmLibra + ".";
  elementoValorConvertio.innerHTML = valorConvertido;
}

/*Desafios 
Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra.
Conversor de temperaturas entre farenheit, kelvin e celcius.
Adicionar uma linha ao projeto desenvolvido para que apareça o valor em bitcoin.
*/
