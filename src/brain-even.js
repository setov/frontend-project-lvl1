/* eslint-disable prefer-const */
import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;
const getAnswer = (number) => (isEven(number) ? 'yes' : 'no');
const ROUND_COUNT = 3;
const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomIntInclusive = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt);
};

const run = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ', {
    defaultInput: 'Friend',
  });
  console.log(`Hello, ${playerName}!`);
  console.log(DESCRIPTION);

  for (let round = 0; round < ROUND_COUNT; round += 1) {
    let questionNumber = getRandomIntInclusive(1, 100);
    let correctAnswer = getAnswer(questionNumber);
    console.log(`Question: ${questionNumber}`);
    let playerAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
export default run;
