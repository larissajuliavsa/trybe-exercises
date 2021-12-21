const numeros = [2, 5, 9, 15, 89, 0, 13, 3, 110];

const maiorNumero = numeros.reduce((accMaiorNumero, numero) => {
  if (accMaiorNumero < numero) return numero;
  return accMaiorNumero;
});
console.log('O maior número do vetor é:', maiorNumero);

/*

function getSpeciesByIds(...ids) {
  if (!ids) {
    return newArray;
  }
  return ids.map((id) => species.find((specie) => specie.id === id));
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

*/