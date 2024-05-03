//createRepository.ts

import { CreateRepository } from './types';

import sendToGithub from './sendToGithub.js';
const createRepository: CreateRepository = async (answers) => {
  const { packageName, packageDescription } = answers;
  if (!packageName || !packageDescription) {
    console.error("Missing required input data");
    return;
  }

  const dataToSend = {
    method: 'POST',
    body: {
      name: packageName,
      description: packageDescription,
      private: false
    }
  };

  const response = await sendToGithub(dataToSend);

  if ('errors' in response) {
    console.error('Failed to create repository:', response.errors);
    return;
  }

  console.log('Repository created successfully:', response.data);
};


export default createRepository;