let fruits = [3, 4, 10, 1, 12];
let soma = 0;

for (let index = 0; index < fruits.length; index ++) {
  soma += fruits[index];
}

if (soma > 15) {
  console.log(soma);
} else {
  console.log("Valor menor que 16")
}