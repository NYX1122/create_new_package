// types.ts

type CreateNewPackageInput = {
  packageName: string;
  packageDescription: string;
};

type CreateNewPackageOutput = Promise<{
  result: string;
}>;

export type CreateNewPackage = (inputData?: CreateNewPackageInput) => CreateNewPackageOutput;

type ValidateInputInput = {
  packageName: string;
  packageDescription: string;
};

type ValidateInputOutput = Promise<{
  validatedPackageName: string;
  validatedPackageDescription: string;
}>;

export type ValidateInput = (inputData: ValidateInputInput) => ValidateInputOutput;

type GetUserInputInput = string;

type GetUserInputOutput = Promise<string>;

export type GetUserInput = (inputData: GetUserInputInput) => GetUserInputOutput;

type CreateRepositoryInput = {
  packageName: string;
  packageDescription: string;
};

type CreateRepositoryOutput = Promise<{
  result: string;
}>;

export type CreateRepository = (inputData: CreateRepositoryInput) => CreateRepositoryOutput;