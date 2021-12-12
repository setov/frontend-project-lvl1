import getRandomIntInclusive from '../utils.js';

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (number) => (isPrime(number) ? 'yes' : 'no');

/**
 * every call function from this module
 * generate new random question, answer data.
 * @returns {String[]} [description, question, answer]
 */
const generate = () => {
  const question = getRandomIntInclusive(1, 1109);
  const answer = getAnswer(question);
  return [DESCRIPTION, question, answer];
};
export default generate;
