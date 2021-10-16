let valorProduto = 1000;

let valorCusto = 250;
let impostoSobreOCusto = 50;

let valorCustoTotal = valorCusto + impostoSobreOCusto;

let lucro = valorProduto - valorCustoTotal;


if (lucro < 0) {
  console.log('error!');
} else {
  console.log(lucro * 1000);
}


