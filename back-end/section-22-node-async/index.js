function calcMath(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
      return reject(new Error('Informe apenas números'));
    }

    const result = (a + b) * c;

    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    }

    resolve(result);
  });
}

function randomMath() {
  return Math.floor(Math.random() * 100 + 1);
}

function resultRandomMath() {
  const randomNumbers = Array.from({length: 3}).map(randomMath);

  console.log(randomNumbers);

  calcMath(...randomNumbers)
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
}

resultRandomMath()

// calcMath(10, 10, 10)
//   .then((resolve) => console.log(resolve))
//   .catch((err) => console.log(err.message));

// calcMath(1, 1, 'a')
//   .then((resolve) => console.log(resolve))
//   .catch((err) => console.log(err.message));

// calcMath(1, 1, 1)
//   .then((resolve) => console.log(resolve))
//   .catch((err) => console.log(err.message));
