function apresentar(nome){
    return `meu nome é${nome}`;
}
//Arrow Function não usa ()no parâmetro e nem {}pra fechar o bloco de código. Se precisar usar mais de uma linha vai precisar usar as chaves {}o return;
const apresentarArrow = nome => `meu nome é${nome}`;

const soma = (num1, num2) => num1+num2;

//Arrow Function com mais de uma linha de instrução.

const somaNumerosPequenos = (num1, num2) => {
    if(num1 ||num2 >10){
        return "somente números de 1 na 9"
    } else{
        return num1+num2;
    }
}
//hoisting se comporta da mesma forma da expressão.