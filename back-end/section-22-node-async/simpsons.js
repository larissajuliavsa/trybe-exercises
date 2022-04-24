const fs = require('fs').promises;

async function simpsonsCharacters() {
  const data = await fs.readFile('./simpsons.json', 'utf-8')
    
  const simpsons = JSON.parse(data);
  const list = simpsons.map(({id, name}) => `${id} - ${name}`);

  list.forEach((element) => console.log(element));    
}

async function simpsonsId(id) {
  const data = await fs.readFile('./simpsons.json', 'utf-8')

  const simpsons = JSON.parse(data);

  const findSimpsons = simpsons.find((element) => Number(element.id) === id);

  if (!findSimpsons) {
    throw new Error('id não encontrado');
  }

  return findSimpsons;
}

async function filterSimpsons() {
  const data = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(data);

  const simpsonsArray = simpsons.filter((simpson) => simpson.id !== '6' && simpson.id !== '10');

  await fs.writeFile('./simpsons.json', JSON.stringify(simpsonsArray));
}

async function simpsonsFamily() {
  const data = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(data);

  const arrayId = [1, 2, 3, 4];
  const familyFile = simpsons.filter((element) => arrayId.includes(Number(element.id)));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(familyFile));
}

async function addNelsonMuntz() {
  const data = await fs.readFile('./simpsonsFamily.json', 'utf-8');

  const simpsons = JSON.parse(data);

  const nelsonMuntz = { id: '8', name: 'Nelson Muntz' };

  const simpsonsAddNelson = [ ...simpsons, nelsonMuntz ]

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsAddNelson));
}

async function addMaggieSimpson() {
  const data = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(data);

  const deleteNelson = simpsons.filter((element) => element.id !== '8');

  const maggieSimpson = { id: '15', name: 'Maggie Simpson' };

  const simpsonsAddMaggie = [ ...deleteNelson, maggieSimpson]

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsAddMaggie));
}

async function main() {
  const returnCharacters = await simpsonsCharacters();
  const returnSimpsons = await simpsonsId(1);
  const returnFilter = await filterSimpsons();
  const returnFamily = await simpsonsFamily();
  const returnAddNelson = await addNelsonMuntz();
  const returnAddMaggie = await addMaggieSimpson();
  console.log(returnCharacters);
  console.log(returnSimpsons);
  console.log(returnFilter);
  console.log(returnFamily);
  console.log(returnAddNelson);
  console.log(returnAddMaggie);
}

main();
