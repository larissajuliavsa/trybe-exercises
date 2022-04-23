const readline = require('readline-sync');

function calcVelocidadeMedia () {
  const distancia = readline.questionInt('Distância em metros: ');
  const tempo = readline.questionInt('Tempo em segundos: ');

  const velocidadeMedia = (distancia / tempo).toFixed(2);

  console.log(`Velocidade média: ${velocidadeMedia} m/s`)
}

calcVelocidadeMedia()