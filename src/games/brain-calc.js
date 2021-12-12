import getRandomIntInclusive from '../utils.js';

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
 * @returns {String[]} [description, question, answer]
 */
const generate = () => {
  const a = getRandomIntInclusive(1, 20);
  const b = getRandomIntInclusive(1, 20);

  const randomIndex = Math.floor(Math.random() * OPERATIONS.length);
  const operation = OPERATIONS[randomIndex];
  const answer = String(EXPRESSIONS[operation](a, b));
  const question = `${a} ${operation} ${b}`;

  return [DESCRIPTION, question, answer];
};

export default generate;
