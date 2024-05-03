//sendToGithub.ts
import { SendToGithub, SendToGithubSuccessResponse, SendToGithubErrorResponse } from './types';

const sendToGithub: SendToGithub = async ({ method, body }) => {
  const url = 'https://api.github.com/user/repos';
  const token = process.env.GITHUB_TOKEN;
  const parsedBody = JSON.stringify(body);

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: parsedBody
  });

  const data = await response.json();

  if (!response.ok) {
    // If the response has failed, assume it is an error response
    return { message: 'Error', errors: data.errors, documentation_url: data.documentation_url } as SendToGithubErrorResponse;
  }

  // Otherwise, assume success
  return { data } as SendToGithubSuccessResponse;
};


export default sendToGithub;