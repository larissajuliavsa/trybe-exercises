let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numerosImpares = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 1) {
    numerosImpares++;
  }
};

console.log('Numeros impares: ' + numerosImpares);