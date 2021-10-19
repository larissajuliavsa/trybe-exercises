function encode(frase) {

  let novaFrase = frase.split('');

  for (let index = 0; index < novaFrase.length; index += 1) {
    if (novaFrase[index] == 'a') {
      novaFrase[index] = '1';
    } else if (novaFrase[index] == 'e') {
        novaFrase[index] = '2';
    } else if (novaFrase[index] == 'i') {
        novaFrase[index] = '3';
    } else if (novaFrase[index] == 'o') {
        novaFrase[index] = '4';
    } else if (novaFrase[index] == 'u') {
        novaFrase[index] = '5';
    }        
  }
  
  novaFrase = novaFrase.join('');
  console.log(novaFrase);

  return novaFrase;
}

encode('hi there!');

function decode(novaFrase) {
  let fraseNormal = novaFrase.split('');
  for (let i = 0; i < fraseNormal.length; i += 1) {
    if (fraseNormal[i] == '1') {
      fraseNormal[i] = 'a';
    } else if (fraseNormal[i] == '2') {
      fraseNormal[i] = 'e';
    } else if (fraseNormal[i] == '3') {
      fraseNormal[i] = 'i';
    } else if (fraseNormal[i] == '4') {
      fraseNormal[i] = 'o';
    } else if (fraseNormal[i] == '5') {
      fraseNormal[i] = 'u';
    }
  }

  fraseNormal = fraseNormal.join('')
  console.log(fraseNormal);

  return fraseNormal;
}

decode('h3 th2r2!')