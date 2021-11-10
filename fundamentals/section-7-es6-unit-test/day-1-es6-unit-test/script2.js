const fatorial = (num) => {
  let resultado = 1;
  for (let index = num; index > 1; index--) {
    resultado = resultado * index;
  }
  return resultado;
};
console.log(fatorial(4));

const maiorPalavra = (frase) => {
  let arrayFrase = frase.split(" ");
  let maiorPalavra = 0;
  for (let index = 0; index < arrayFrase.length; index += 1) {
    if (arrayFrase[index].length > maiorPalavra) {
      maiorPalavra = arrayFrase[index].length;
    }
  }
  return arrayFrase[maiorPalavra];
};
console.log(
  maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu")
);

const clickCount = () => {
  let texto = document.getElementById('texto');
  let contagem = texto.innerHTML;
  contagem++;  
  texto.innerHTML = contagem;
}
