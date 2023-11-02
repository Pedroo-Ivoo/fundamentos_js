// Tipo Números (Number)

const meuNumero= 3;

const primeiroNumero = 1;
const segundoNumero =2;

const operacaoMatematica = primeiroNumero - segundoNumero;
console.log(operacaoMatematica)

//ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao =primeiroNumero / numeroPontoFlutuante;
console.log(novaOperacao);

// Not a Number é quando tenta fazer uma operação com uma 
//variavel que não é numero.

const alura = "alura"

const operacaoNan = primeiroNumero / alura;

console.log(operacaoNan)