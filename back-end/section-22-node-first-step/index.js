const readline = require('readline-sync');

const scripts = [
  {name: 'Calcular IMC', script: './imc.js'},
  {name: 'Calcular Velocidade Média', script: './velocidade.js'},
  {name: 'Jogo de Sorteio', script: './sorteio.js'},
];

let texto = scripts.map((script, index) => `${index + 1} - ${script.name}  `);

texto.unshift('Digite um número para executar o script escolhido   ');

texto = texto.join('\n');

const scriptNumero = readline.questionInt(texto) - 1;

const script = scripts[scriptNumero];

!script && console.log('Número inválido. Saindo da requisição');

require(script.script);
