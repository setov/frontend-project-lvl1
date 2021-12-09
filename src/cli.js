import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ', {
    defaultInput: 'Friend',
  });
  console.log(`Hello, ${name}!`);
};
