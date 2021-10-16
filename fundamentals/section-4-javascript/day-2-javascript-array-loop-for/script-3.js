let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numerosImpares = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 1) {
    numerosImpares++;
  }
};

console.log('Numeros impares: ' + numerosImpares);
/*

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers = [];
let umAoVinteCinco;

for (let index = 0; index < numbers.length; index++) {  
  umAoVinteCinco = numbers[index];  
  if (umAoVinteCinco > 0 && umAoVinteCinco <= 25) {
    novoNumbers.push(umAoVinteCinco);
    console.log(novoNumbers)
}
}
*/