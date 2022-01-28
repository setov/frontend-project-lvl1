import getRandomIntInclusive from '../utils.js';
import run from '../index.js';

const DESCRIPTION = 'What is the result of the expression?';
const OPERATIONS = ['-', '+', '*'];
const MIN_OPERAND = 1;
const MAX_OPERAND = 20;
const EXPRESSIONS = {
  '-': (a, b) => a - b,
  '+': (a, b) => a + b,
  '*': (a, b) => a * b,
};

/**
 * get arithmetical result of the expression.
 * @param {Number} operand1 first operand
 * @param {Number} operand2 second operand
 * @param {String} operation operation
 * @returns {String[]} [question, answer]
 */
const getCalculationResult = (operand1, operand2, operation) => {
  const answer = String(EXPRESSIONS[operation](operand1, operand2));
  const question = `${operand1} ${operation} ${operand2}`;
  return [question, answer];
};

/**
 * every call function from this module
 * generate new random question, answer data.
 * @returns {String[]} [question, answer]
 */
const generate = () => {
  const a = getRandomIntInclusive(MIN_OPERAND, MAX_OPERAND);
  const b = getRandomIntInclusive(MIN_OPERAND, MAX_OPERAND);

  const randomIndex = Math.floor(Math.random() * OPERATIONS.length);
  const operation = OPERATIONS[randomIndex];
  const data = getCalculationResult(a, b, operation);

  return data;
};

export default () => run(DESCRIPTION, generate);
