/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_login {
  __typename: "User";
  id: string;
  username: string;
  bio: string;
  avatar: string;
}

export interface LoginUser {
  login: LoginUser_login | null;
}

export interface LoginUserVariables {
  username: string;
  password: string;
}
