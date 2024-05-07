import { ValidateInput } from './types';

import getUserInput from './getUserInput.js';

const validateInput: ValidateInput = async ({ packageName, packageDescription } = { packageName: '', packageDescription: '' }) => {
  let validatedPackageName = packageName;
  let validatedPackageDescription = packageDescription;

  if (packageName === '') {
    validatedPackageName = await getUserInput('Package name?');
  }

  if (packageDescription === '') {
    validatedPackageDescription = await getUserInput('Package description?');
  }

  if (validatedPackageName === '') {
    throw Error('Package name is required');
  }

  return {
    validatedPackageName,
    validatedPackageDescription
  };
};

export default validateInput;