const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
    // Criamos uma variável readlineInterface para inicializar
  // a interface de comunicação do módulo readline, conforme visto na documentação
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(message, (answer) => {
      readlineInterface.close();

      resolve(answer);
    })
  })
}

async function start() {
  const fileName = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    const fileContent = await fs.readFile(fileName, 'utf-8');

    console.log(fileContent);
  } catch (err) {
    console.log('Arquivo inexistente');
  }
}

start()