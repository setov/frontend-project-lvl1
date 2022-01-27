import readlineSync from 'readline-sync';

const ROUND_COUNT = 3;

/**
 * @param { string } definition description for the game
 * @param { callable } game get array data [question, answer] for the game
 * @returns { void }
 */
const run = (definition, game) => {
  const description = definition;
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ', {
    defaultInput: 'Friend',
  });
  console.log(`Hello, ${playerName}!`);
  console.log(description);

  for (let round = 0; round < ROUND_COUNT; round += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (answer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
export default run;
