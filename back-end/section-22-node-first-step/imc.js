const readline = require('readline-sync');

const PESO_LARISSA = 62;
const ALTURA_LARISSA = 164;

function calcIMC () {
  const peso = readline.questionFloat('Qual é o seu peso? em kg: ');
  const altura = readline.questionInt('Qual é a sua altura? em cm: ');

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const IMC = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${IMC}`);

  if (IMC < 18.5 ) {
    return console.log('Você está abaixo do peso: magreza')
  }

  if (IMC >= 18.5 && IMC < 25) {
    return console.log('Você está com peso normal: adequado')
  }

  if (IMC >= 25 && IMC < 30) {
    return console.log('Você está acima do peso: sobrepeso')
  }

  if (IMC >= 30 && IMC < 35) {
    return console.log('Você está com obesidade: obesidade grau I')
  }

  if (IMC >= 35 && IMC < 40) {
    return console.log('Você está com obesidade: obesidade grau II')
  }

  if (IMC > 40) {
    return console.log('Você está com obesidade: obesidade grau III e IV')
  }
}

calcIMC();
