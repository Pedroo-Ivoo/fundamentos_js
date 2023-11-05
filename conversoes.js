//Importância saber os tipos de dados e como trabalha com os boleanos 

// conversão implicita  - Permite converte um tipo de dado em outro. Exemplo converte o tipo Number em string e existe outras possibilidades.

const numero = 456;
const numeroString = "456";
console.log(numero===numeroString);// retorna falso aqui não houve conversão.
console.log(numero == numeroString);// retorna verdadeiro Aqui ele converteu numero em string e reconheceu como iguais. Isso pode fazer que ocorra bug

console.log(numero + numeroString); //O retorno aqui é a expressão dos valores 456456 ele concatenou e não realizou a soma, é inmportante deixar claro que tipo de valor a gente está buscado.

//conversão explicita.

// Assim, utilizamos Number() para fazermos a conversão de string para número e String() para converter o tipo numero em string
console.log(numero + Number(numeroString));// retornou o resultado da soma 912.



