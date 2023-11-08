//O ternário funciona como um If e esle.

const idadeMinima = 18;
const idadeCliente =19;

if (idadeCliente>= idadeMinima){
    console.log("Pode vender a bebida alcoolica")
} else {
    console.log("Não pode vender a bebida alcoolica")
}

console.log(idadeCliente>= idadeMinima ? "Pode vender a bebida alcoolica" : "Não pode vender a bebida alcoolica");

// O operdador ternário pode ser usado, mas não é muito recomendado em boas práticas, já que pode ser difícil manutenção ao longo do tempo.
//Estrutura do operador ternário  (Condição ?(equivale ao se (true)) ação a ser executada :(equivale ao else (false)) outra ação)
