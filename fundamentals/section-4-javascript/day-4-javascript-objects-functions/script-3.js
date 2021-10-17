function arrayMaior(maiorIndexOf) {
  let array = [2, 3, 6, 7, 10, 1];
  let maior = array[0];  
  
  for (let index = 0; index < array.length; index++) {
    if (array[index] >= maior) {
      maior = array[index];
      maiorIndexOf = array.indexOf(maior);      
    }
  }   
  return maiorIndexOf;
}

console.log(arrayMaior(10));