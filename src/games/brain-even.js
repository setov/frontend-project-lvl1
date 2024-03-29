import getRandomIntInclusive from '../utils.js';
import run from '../index.js';

const DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;
const getAnswer = (number) => (isEven(number) ? 'yes' : 'no');

/**
 * every call function from this module
 * generate new random question, answer data.
 * @returns {String[]} [question, answer]
 */
const generate = () => {
  const question = getRandomIntInclusive(1, 100);
  const answer = getAnswer(question);
  return [question, answer];
};

export default () => run(DESCRIPTION, generate);
