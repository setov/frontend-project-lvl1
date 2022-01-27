import getRandomIntInclusive from '../utils.js';
import run from '../index.js';

const DESCRIPTION = 'What is the result of the expression?';
const OPERATIONS = ['-', '+', '*'];
const EXPRESSIONS = {
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
};
/**
 * every call function from this module
 * generate new random question, answer data.
 * @returns {String[]} [question, answer]
 */
const generate = () => {
  const a = getRandomIntInclusive(1, 20);
  const b = getRandomIntInclusive(1, 20);

  const randomIndex = Math.floor(Math.random() * OPERATIONS.length);
  const operation = OPERATIONS[randomIndex];
  const answer = String(EXPRESSIONS[operation](a, b));
  const question = `${a} ${operation} ${b}`;

  return [question, answer];
};

export default () => run(DESCRIPTION, generate);
