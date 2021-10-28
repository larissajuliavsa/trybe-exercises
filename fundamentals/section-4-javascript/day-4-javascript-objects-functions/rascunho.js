function hydrate(string) {
  let numbers = /\d+/g;
  let result = string.match(numbers).map(Number);
  let cups = 0;

  for (let index = 0; index < result.length; index += 1) {    
    cups = cups + result[index]
  }

  let waterCups = cups.toString();

  if (cups === 1) {    
    return waterCups + " copo de água";
  } else {
    return waterCups + " copos de água"
  }
}

hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")
console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"))