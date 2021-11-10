// function count_down(x){
//   let newArray = [x,'...'];
//   let valorMenor = 0;

//   for (let index = 0; index < x * 6; index += 1) {
//     valorMenor = x - 1;
//     newArray.push(valorMenor,'...');
//     x = valorMenor;
//   }

//   let countdown = newArray.join("");
//   return countdown + '0!!!'
// }
// count_down(10)

// function multiples_of_3_or_5(roof){
//   let arrayMult = [];
//   for (let index = 1; index < roof * 10; index += 1) {
//     roof = roof - 1;
//     arrayMult.push(roof);
//   }
//   console.log(arrayMult)
//   let soma = 0;
//   for (let i = 0; i < arrayMult.length; i += 1) {
//     if (arrayMult[i] % 3 === 0 || arrayMult[i] % 5 === 0) {
//       soma +=  arrayMult[i];
//     }
//   }
//   console.log(soma)
//   return soma;
// }
// multiples_of_3_or_5(23)

function isPrimeNumber(n) {
  let array = [];


    for (var i = 2; i < n; i++) { 
      if(n % i === 0) {
        return false;
      } else {
        array.push(n)
      }
    }
  
  console.log(array)
  return n > 1;
}

console.log(isPrimeNumber(6));
