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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
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
  editProfile: UserResponse;
  login: LoginResponse;
  register: UserResponse;
};

export type MutationEditProfileArgs = {
  bio?: InputMaybe<Scalars["String"]>;
  profileImage?: InputMaybe<Scalars["Upload"]>;
  username?: InputMaybe<Scalars["String"]>;
};

export type MutationLoginArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type MutationRegisterArgs = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  user: UserResponse;
};

export type QueryUserArgs = {
  id: Scalars["String"];
};

export type User = {
  __typename?: "User";
  bio?: Maybe<Scalars["String"]>;
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
  bio?: Maybe<Scalars["String"]>;
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

export type LoginMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "LoginResponse";
    user?:
      | {
          __typename?: "UserWithTokens";
          accessToken?: string | null | undefined;
          refreshToken?: string | null | undefined;
        }
      | null
      | undefined;
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

export type GetUserQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetUserQuery = {
  __typename?: "Query";
  user: {
    __typename?: "UserResponse";
    user?:
      | {
          __typename?: "User";
          username: string;
          bio?: string | null | undefined;
        }
      | null
      | undefined;
  };
};

export type EditProfileMutationVariables = Exact<{
  username?: InputMaybe<Scalars["String"]>;
  bio?: InputMaybe<Scalars["String"]>;
  profileImage?: InputMaybe<Scalars["Upload"]>;
}>;

export type EditProfileMutation = {
  __typename?: "Mutation";
  editProfile: {
    __typename?: "UserResponse";
    errors?:
      | Array<{ __typename?: "FieldError"; message: string }>
      | null
      | undefined;
    user?:
      | {
          __typename?: "User";
          username: string;
          bio?: string | null | undefined;
          profileImage?: string | null | undefined;
        }
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
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        accessToken
        refreshToken
      }
      errors {
        field
        message
        statusCode
      }
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const GetUserDocument = gql`
  query GetUser($id: String!) {
    user(id: $id) {
      user {
        username
        bio
      }
    }
  }
`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(
  baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export function useGetUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(
    GetUserDocument,
    options
  );
}
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<
  GetUserQuery,
  GetUserQueryVariables
>;
export const EditProfileDocument = gql`
  mutation EditProfile($username: String, $bio: String, $profileImage: Upload) {
    editProfile(username: $username, bio: $bio, profileImage: $profileImage) {
      errors {
        message
      }
      user {
        username
        bio
        profileImage
      }
    }
  }
`;
export type EditProfileMutationFn = Apollo.MutationFunction<
  EditProfileMutation,
  EditProfileMutationVariables
>;

/**
 * __useEditProfileMutation__
 *
 * To run a mutation, you first call `useEditProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editProfileMutation, { data, loading, error }] = useEditProfileMutation({
 *   variables: {
 *      username: // value for 'username'
 *      bio: // value for 'bio'
 *      profileImage: // value for 'profileImage'
 *   },
 * });
 */
export function useEditProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditProfileMutation,
    EditProfileMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditProfileMutation, EditProfileMutationVariables>(
    EditProfileDocument,
    options
  );
}
export type EditProfileMutationHookResult = ReturnType<
  typeof useEditProfileMutation
>;
export type EditProfileMutationResult =
  Apollo.MutationResult<EditProfileMutation>;
export type EditProfileMutationOptions = Apollo.BaseMutationOptions<
  EditProfileMutation,
  EditProfileMutationVariables
>;
