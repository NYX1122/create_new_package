import getUserInput from './getUserInput.js';

const createNewPackage = async (): Promise<string> => {
  const questions = [
    { name: 'packageName', message: 'What is the name of the package?' },
    { name: 'packageDescription', message: 'What is the description of the package?' }
  ];

  const packageData = await getUserInput(questions);

  console.log(packageData);
  return 'Bla';
};

createNewPackage().then(() => {
  console.log('Package created!');
}).catch((error) => {
  console.error(error);
});

export default createNewPackage;