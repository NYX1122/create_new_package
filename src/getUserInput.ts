//getUserInput.ts
import inquirer from 'inquirer';

import { GetUserInput, Answers } from './types';

const getUserInput: GetUserInput = async (inputData) => {
  const inquirerInputData = inputData.map(question => {
    return {
      name: question.name,
      message: question.message,
      type: 'input'
    };
  });

  const answers: Answers = await inquirer.prompt<Answers>(inquirerInputData);

  return answers;
};

export default getUserInput;