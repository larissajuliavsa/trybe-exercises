const readline = require('readline-sync');

function sorteioResultado(numero, resposta) {
  if (numero !== resposta) {
    return console.log(`Não foi dessa vez, o número sorteado é o ${numero}`);
  }

  return console.log('Parabéns, seu número é o sorteado!');
}

function game() {
  const numero = parseInt(Math.random() * 10);

  const resposta = readline.questionInt('Digite entre 0 e 10 para participar do sorteio:  ');
  sorteioResultado(numero, resposta);

  const tentarDeNovo = readline.question('Deseja tentar novamente? Digite "sim" ou "não"  ');

  tentarDeNovo === 'não' && console.log('Até a próxima!');

  tentarDeNovo === 'sim' && game();
}

game();
