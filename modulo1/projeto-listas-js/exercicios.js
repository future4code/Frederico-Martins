// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo( ) {
  let altura = Number(prompt ("Qual o valor da altura ?"))
  let largura = Number (prompt ("Qual valor da largura ?"))
  let resultado = altura * largura
  console.log (resultado)
  

}



// EXERCÍCIO 02
function imprimeIdade( ) {
let anoAtual = Number(prompt("Qual e o ano atual?"))
let anoNasc = Number(prompt('Qual ano de nascimento ?'))
let idade = anoAtual - anoNasc
console.log (idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
let imc = peso/(altura * altura) 
return imc 

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual e seu nome?")
  let idade = prompt("Qual sua idade?")
  let email = prompt ("Qual e seu e-mail?")
  console.log ("Meu nome é " +  nome + ", tenho " + idade + " anos, e o meu email é " + email+".")

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas( ) {
let cor1 = prompt("Digite uma cor")
let cor2 = prompt("Digite outra cor ")
let cor3 = prompt ("Digite outra cor")
let cores = [cor1, cor2, cor3]
console.log (cores)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
return string.toUpperCase ( )


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
let conta = custo / valorIngresso
 return conta


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
let igualdade = string1.length === string2.length
return igualdade
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
let  primeiroElemento = array [0]
return primeiroElemento

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
let UltimoElemento = array.pop ( )
return UltimoElemento


}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
let primero1 = array [0]
let ultitmo = array.pop ( )
array [0] = ultitmo
array.push (primero1)
return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
let iguais = string1.toUpperCase( ) === string2.toUpperCase ( )
return iguais

}

// EXERCÍCIO 13
function checaRenovacaoRG() {


}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}