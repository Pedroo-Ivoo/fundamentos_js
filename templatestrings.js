const nome = "Pedro";
const idade = 2023-1985;
const cidadeNascimento = "São José dos Campos"
const apresentacao = "Meu nome é " + nome + ", eu nasci na cidade de " + cidadeNascimento + "e tenho " + idade + " idade";
//Como está escrito acima se torna muito complicado de trabalhar e manter uma boa concordância e pontuação do texto e as concatenações das strings
console.log(apresentacao);

const apresentacao2 = `Meu nome é ${nome} e nasci na cidade ${cidadeNascimento} e tenho ${idade} de idade`;
//Acima temos a template string que inicia com ``(crases) e para a inserção das variáveis utiliza o ${}.
console.log(apresentacao2)