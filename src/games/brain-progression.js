import getRandomIntInclusive from '../utils.js';

const DESCRIPTION = 'What number is missing in the progression?';
const SIZE = 10;

const range = (size, startAt = 0, step = 1) => [...Array(size).keys()]
  .map((value) => value * step + startAt);

const getArrayWithHiddenElement = (arr, hiddenIndex = 0, char = '..') => arr
  .map((item, index) => (index === hiddenIndex ? char : item));

/**
 * every call function from this module
 * generate new random question, answer data.
 * @returns {String[]} [description, question, answer]
 */
const generate = () => {
  const startAt = getRandomIntInclusive(2, 20);
  const step = getRandomIntInclusive(2, 8);
  const progression = range(SIZE, startAt, step);
  const length = progression.length - 1;
  const hiddenIndex = getRandomIntInclusive(1, length);
  const answer = String(progression[hiddenIndex]);
  const question = getArrayWithHiddenElement(progression, hiddenIndex).join(' ');
  return [DESCRIPTION, question, answer];
};
export default generate;
