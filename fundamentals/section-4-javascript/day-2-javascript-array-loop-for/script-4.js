let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoNumbers = [];

for (let index = 0; index <= numbers.length; index++) {  
  if (numbers[index] > 0 && numbers[index] <= 25) {
    novoNumbers.push(numbers[index]);   
  }
}

novoNumbers / 2

console.log(novoNumbers); 

