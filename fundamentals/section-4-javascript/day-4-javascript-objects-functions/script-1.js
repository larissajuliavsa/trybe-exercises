let info1 = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};

let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

console.log('Bem vinda, ' + info1.personagem);
console.log('------------');

for(let key in info1) {
  console.log(key);  
}

console.log('------------');

for (let key in info1) {
  console.log(info1[key]);  
}

console.log('------------');

for (let index in info1, info2){  
  if(info1[index] == info2[index]) {
    console.log('Ambas recorrentes')
  } else {
    console.log(info1[index] + ' e ' + info2[index]);
  }
}

console.log('------------');