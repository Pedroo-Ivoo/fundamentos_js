// let x= "";
// console.log(x);
// x = "oi";

//Neste momento a função está declarada e se rodar o código não faz nada. Por não está sendo executado. É preciso chamar a função.
//Essa abaixo é a chamada DECLARAÇÃO DE FUNÇÃO.
function imprimeTexto(texto){
    console.log(texto)
}

// Agora chamamos a função que pode ser executada uma ou mais vezes.Assim podemos utilizar se e quando quisermos.

imprimeTexto("Oi");
imprimeTexto("Outro texto");

// Há três formas de escrever funções.

function soma() {
    return 2+2;
}
//return diz para o código retornar o resultado da função. Sem ele realiza o cálculo, mas não retorna e não temos como exibir o resultado no log.
console.log(soma());

//é possivel chamar uma função em outra função. Assim cada parte do código faz uma parte depois é chamada. Ajuda na manutenção e no desenvolvimento do código.
imprimeTexto(soma());
