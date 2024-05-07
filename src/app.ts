//app.ts
import dotenv from 'dotenv';
dotenv.config();

import { CreateNewPackage } from './types';

import validateInput from './validateInput.js';

const createNewPackage: CreateNewPackage = async ({ packageName, packageDescription } = { packageName: '', packageDescription: '' }) => {
  const { validatedPackageName, validatedPackageDescription } = await validateInput({ packageName, packageDescription });

  console.log(validatedPackageName, validatedPackageDescription);

  return {
    result: 'success'
  };
};

createNewPackage().then(() => {
  console.log('Package created!');
}).catch((error) => {
  console.error(error);
});

export default createNewPackage;