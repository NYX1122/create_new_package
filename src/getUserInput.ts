//getUserInput.ts
import inquirer from 'inquirer';

import { GetUserInput } from './types';

const getUserInput: GetUserInput = async (question) => {
  const answer = await inquirer.prompt({
    type: 'input',
    name: 'input',
    message: question
  });

  const userInput = answer.input as string;

  return userInput;
};

export default getUserInput;