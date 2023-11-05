// tipo boleano

const usuarioLogado = true;
const contaPaga = false;

// trufy ou falsy  não são boleanos, mas se comportam como se fossem.

// 0 pode ser usado como falsy e o 1 como trufy.

console.log(0 == false); //resultado true
console.log("" == false); // string vazia também é false e o resultado retorna true.
console.log(1== true); // retorna true.

let minhaVar;
let varNull = null;

console.log(minhaVar);// o espaço está guardado na memória, mas não está definido
console.log(varNull);// o espaço está guardado como vazio. Null tem caracteristica especiais.

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull);// retorna como objeto