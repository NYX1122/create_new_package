// types.ts

// User input related types
export type Question = {
  name: string;
  message: string;
};

export type QuestionArr = Array<Question>;

export type Answers = {
  [key: string]: string;
};

export type GetUserInput = (inputData: QuestionArr) => Promise<Answers>;

// Repository related types
export interface Repository {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  // Add other necessary properties from the GitHub response
}

export type CreateRepository = (inputData: Answers) => Promise<void>;

export type CreateRepositoryBody = {
  name: string;
  description: string;
  private: boolean;
};

export type CommunicationData = {
  method: string;
  body: CreateRepositoryBody;
};

// GitHub API response types
export interface GitHubErrorResponse {
  message: string;
  errors: Array<{
    resource: string;
    code: string;
    field: string;
    message: string;
  }>;
  documentation_url: string;
}

export interface GitHubSuccessResponse {
  data: Repository;
}

export type GitHubResponse = GitHubSuccessResponse | GitHubErrorResponse;

export type SendToGithub = (inputData: CommunicationData) => Promise<GitHubResponse>;
