import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type EntityWrapper = {
  __typename?: "EntityWrapper";
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  updatedAt: Scalars["DateTime"];
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"];
  message: Scalars["String"];
  statusCode: Scalars["Float"];
};

export type GenerateAccessTokenReponse = {
  __typename?: "GenerateAccessTokenReponse";
  accessToken: Scalars["String"];
};

export type GenerateResetPasswordTokenResponse = {
  __typename?: "GenerateResetPasswordTokenResponse";
  emailSent?: Maybe<Scalars["Boolean"]>;
  errors?: Maybe<Array<FieldError>>;
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<UserWithTokens>;
};

export type Mutation = {
  __typename?: "Mutation";
  register: UserResponse;
};

export type MutationRegisterArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  hi: Scalars["String"];
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  profileImage?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  username: Scalars["String"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UserWithTokens = {
  __typename?: "UserWithTokens";
  accessToken?: Maybe<Scalars["String"]>;
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  profileImage?: Maybe<Scalars["String"]>;
  refreshToken?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  username: Scalars["String"];
};

export type RegisterMutationVariables = Exact<{
  email: Scalars["String"];
  username: Scalars["String"];
  password: Scalars["String"];
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "UserResponse";
    user?: { __typename?: "User"; id: string } | null | undefined;
    errors?:
      | Array<{
          __typename?: "FieldError";
          field: string;
          message: string;
          statusCode: number;
        }>
      | null
      | undefined;
  };
};

export const RegisterDocument = gql`
  mutation Register($email: String!, $username: String!, $password: String!) {
    register(email: $email, username: $username, password: $password) {
      user {
        id
      }
      errors {
        field
        message
        statusCode
      }
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
