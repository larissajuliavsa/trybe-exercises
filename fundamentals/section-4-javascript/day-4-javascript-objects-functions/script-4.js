let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array) {  
  let maior = '';  

  for (let index = 0; index < array.length; index++) {
    if (array[index].length > maior.length) {
      maior = array[index];               
    }
  } 

  return maior;
} 

console.log(maiorNome(nomes));