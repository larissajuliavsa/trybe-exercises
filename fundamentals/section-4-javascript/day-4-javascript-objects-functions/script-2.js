function verificaPalindrome(palavra) {
  let checarPalavra = palavra.split("").reverse().join("");
  if (checarPalavra === palavra) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome('desenvolvimento'))