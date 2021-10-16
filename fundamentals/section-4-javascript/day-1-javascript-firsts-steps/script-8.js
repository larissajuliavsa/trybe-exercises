let salario = 3500.00;

let inss;
let ir;

if (salario < 1556.94) {
  inss = salario * (8 / 100);
} else if (salario >= 1556.94 && salario < 2594.92) {
  inss = salario * (9 / 100);
} else if (salario >= 2594.92 && salario < 5189.82) {
  inss = salario * (11 / 100);
} else if (salario >= 5189.82) {
  inss = 570.88;
}

let salarioInssDeduzido = salario - inss;

if (salarioInssDeduzido < 1903.98) {
  ir = 0;
} else if (salarioInssDeduzido >= 1903.98 && salarioInssDeduzido < 2826.65) {
  ir = salarioInssDeduzido * (7.5 / 100) - 142.80;
} else if (salarioInssDeduzido >= 2826.65 && salarioInssDeduzido < 3751.05) {
  ir = salarioInssDeduzido * (15 / 100) - 354.80;
} else if (salarioInssDeduzido >= 3751.05 && salarioInssDeduzido <= 4664.68) {
  ir = salarioInssDeduzido * (22.5 / 100) - 636.13;
} else if (salarioInssDeduzido > 4664.68) {
  ir = salarioInssDeduzido * (27.5 / 100) - 869.36;
}

let salarioLiquido = salarioInssDeduzido - ir;

console.log(salarioLiquido);