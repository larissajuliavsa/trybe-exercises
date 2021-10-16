let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];
let menor = numbers[0];

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] >= maior) {
    maior = numbers[index];
  }
}

console.log('Maior valor: ' + maior);

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}

console.log('Menor valor: ' + menor);