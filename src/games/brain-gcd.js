import getRandomIntInclusive from '../utils.js';
import run from '../index.js';

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

/**
 * every call function from this module
 * generate new random question, answer data.
 * @returns {String[]} [question, answer]
 */

const generate = () => {
  const a = getRandomIntInclusive(2, 50);
  const b = getRandomIntInclusive(2, 100);

  const answer = String(gcd(a, b));
  const question = `${a} ${b}`;

  return [question, answer];
};

export default () => run(DESCRIPTION, generate);
