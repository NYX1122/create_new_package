export type Question = {
  name: string,
  message: string
};

export type QuestionArr = Array<Question>;
export type Answers = {
  [key: string]: string;
};

export type GetUserInput = (inputData: QuestionArr) => Promise<Answers>;