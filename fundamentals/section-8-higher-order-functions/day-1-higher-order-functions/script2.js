const number = (numberOfChoice, luckyNumber) => numberOfChoice === luckyNumber;

const raffleResults = (numberOfChoice, callback) => {
  const luckyNumber = Math.floor(Math.random() * 5) + 1; // https://www.w3schools.com/js/js_random.asp
  return callback(numberOfChoice, luckyNumber)
    ? "Congrats, you won!!!"
    : "Ops, try again...";
};

console.log(raffleResults(3, number));