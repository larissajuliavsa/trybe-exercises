const fs = require("fs").promises;

async function arrayPromises() {
  const strings = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

  const arrayFiles = strings.map((element, index) =>
    fs.writeFile(`./file${index + 1}.txt`, element)
  );

  await Promise.all(arrayFiles);

  const files = [
    "file1.txt",
    "file2.txt",
    "file3.txt",
    "file4.txt",
    "file5.txt",
  ];

  const readFiles = files.map((element) => fs.readFile(element, 'utf-8'));

  const filesContent = await Promise.all(readFiles);

  const newFile = filesContent.join(' ');

  await fs.writeFile('./fileAll.txt', newFile);
}

arrayPromises();
