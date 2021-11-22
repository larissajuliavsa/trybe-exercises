const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const checkAnswer = (rightAnswer, studAnswer) => {
  let result = 0;
  for (let index = 0; index < studAnswer.length; index += 1) {
    if (studAnswer[index] === rightAnswer[index]) {
      result += 1;
    } else if (studAnswer[index] === "N.A") {
      result += 0;
    } else if (studAnswer[index] !== rightAnswer[index]) { 
      result -= 0.5;
    }
  }
  return result;
};

const test = (rightAnswer, studAnswer, callback) => {
  return callback(rightAnswer, studAnswer);
};

console.log(test(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswer));
