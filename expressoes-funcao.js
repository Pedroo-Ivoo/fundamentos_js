// expressão de função
//Nesse caso a não nomeamos a função e,sim, utilizamos o const para criar um nome. A função é anônima.
const soma = function(num1, num2){
    return num1 + num2;
}

console.log(soma(1,2));

//Diferença Principal
console.log(apresentar())
function apresentar(){
    return "olá";
}
//É possível chamar a função antes dela.
console.log(adicao())
const adicao = function(num1, num2){ return num1 + num2}
//quando chamamos a função desta forma ela não executa porque a const ainda não foi declara. O que acontece é o Hoisting. No var e na função o Javascript  lista no topo do arquivo antes de executar . Na let e const não.