// == (comparação implícita)

const numero = 5;
const texto = "5";

console.log( numero == texto)// retorna true porque o javascript converteu a string em número e verificou que são iguais.

//=== (comparação explicita)
console.log( numero === texto)// retorna false porque não realiza a convesão do tipo texto(string) para o tipo number. Ele verifica os valores da variaveis e os tipos de dados na variavel.

//typeof
console.log(typeof numero)
console.log(typeof texto)
//Ou seja === compara o valores e o tipo de dado para serem iguais (true)
//As boas práticas recomendam o uso do (===) e quando for fazer conversão utilizar de forma explicita "Number() e String()"