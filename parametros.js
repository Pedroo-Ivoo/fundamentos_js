//parametros de função.
//entre os parenteses informa os parametros da função
function soma(num1, num2) {
    return num1+num2;
}

console.log(soma(2,4))
console.log(soma(245,4))
console.log(soma(-500,415))

//parâmetros x argumentos

//ordem dos parâmetros.
function frase(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(frase(38, "Pedro"))
//cuidado com a ordem dos parâmetros. Pois quando a gente inverte os dados a frase não fica correta no exemplo acima. Fica"Meu nome é 38 e minha idade é Pedro. O Js segue a ordem que foi colocada no parâmetros. abaixo a forma corrta.
console.log(frase("Pedro", 38))

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1*numero2;
 
}
console.log(multiplica(soma(2,4),soma(2,2)));
//dentro das funções as variaveis dela podem ser utilizadas em outros momentos, porque ao final da função ela deixa de ser usada.