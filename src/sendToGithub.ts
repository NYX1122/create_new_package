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

  const data: unknown = await response.json();

  if (!response.ok) {
    // If the response has failed, assume it is an error response
    const errorData = data as { errors: Array<{ resource: string; code: string; field: string; message: string }>; documentation_url: string };
    return { message: 'Error', errors: errorData.errors, documentation_url: errorData.documentation_url };
  }

  // Otherwise, assume success
  const successData = data as Repository;
  return { data: successData };
};


export default sendToGithub;