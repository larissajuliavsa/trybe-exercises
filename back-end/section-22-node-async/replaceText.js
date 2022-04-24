const fs = require('fs').promises;
const readline = require('readline');

function question(message) {
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
  const fileName = await question('Arquivo a ser lido: ');

  const originalContent = await fs.readFile(fileName, 'utf-8')
    .catch((err) => {
      console.error(`Error ao ler o arquivo: ${err}`);

      return false;
    })
  
    if (!originalContent) return;

    const oldWord = await question('Qual palavra deseja substituir?  ');

    const newWord = await question('E qual palavra deve ficar em seu lugar?  ');

    const newText = originalContent.replace( new RegExp(oldWord, 'g'), newWord);

    console.log('Resultado da substituição:  ');
    console.log(newText);

    const destinationPath = await question('Onde deseja salvar o resultado?  ');
    await fs.writeFile(destinationPath, newText);
}

start();
