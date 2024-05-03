//app.ts
import dotenv from 'dotenv';
dotenv.config();

import getUserInput from './getUserInput.js';
import createRepository from './createRepository.js';

const createNewPackage = async (): Promise<string> => {
  const questions = [
    { name: 'packageName', message: 'What is the name of the package?' },
    { name: 'packageDescription', message: 'What is the description of the package?' }
  ];

  const packageData = await getUserInput(questions);

  await createRepository(packageData);

  return 'Bla';
};

createNewPackage().then(() => {
  console.log('Package created!');
}).catch((error) => {
  console.error(error);
});

export default createNewPackage;