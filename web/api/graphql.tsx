import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  clothes: Array<Clothes>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createShirt?: Maybe<Shirt>;
  createPants?: Maybe<Pants>;
  deleteClothes?: Maybe<EntityDeleted>;
};


export type MutationCreateShirtArgs = {
  input: ShirtInput;
};


export type MutationCreatePantsArgs = {
  input: PantsInput;
};


export type MutationDeleteClothesArgs = {
  input: DeleteClothesInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
};

export enum ShirtColor {
  White = 'white',
  Grey = 'grey',
  Blue = 'blue'
}

export type Shirt = {
  __typename?: 'Shirt';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  size: Scalars['Int'];
};

export type Pants = {
  __typename?: 'Pants';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  W: Scalars['Int'];
  L: Scalars['Int'];
};

export type Clothes = Shirt | Pants;

export type ClothesQueryInput = {
  name?: Maybe<Scalars['String']>;
  color: Scalars['String'];
};

export type ShirtInput = {
  name?: Maybe<Scalars['String']>;
  color: ShirtColor;
  size: Scalars['Int'];
};

export type PantsInput = {
  name?: Maybe<Scalars['String']>;
  color: Scalars['String'];
  W: Scalars['Int'];
  L: Scalars['Int'];
};

export type DeleteClothesInput = {
  id: Scalars['ID'];
};

export type EntityDeleted = {
  __typename?: 'EntityDeleted';
  id: Scalars['ID'];
};

export type CreatePantsMutationVariables = Exact<{
  input: PantsInput;
}>;


export type CreatePantsMutation = (
  { __typename?: 'Mutation' }
  & { createPants?: Maybe<(
    { __typename?: 'Pants' }
    & Pick<Pants, 'id'>
  )> }
);

export type CreateShirtMutationVariables = Exact<{
  input: ShirtInput;
}>;


export type CreateShirtMutation = (
  { __typename?: 'Mutation' }
  & { createShirt?: Maybe<(
    { __typename?: 'Shirt' }
    & Pick<Shirt, 'id'>
  )> }
);

export type DeleteClothesMutationVariables = Exact<{
  input: DeleteClothesInput;
}>;


export type DeleteClothesMutation = (
  { __typename?: 'Mutation' }
  & { deleteClothes?: Maybe<(
    { __typename?: 'EntityDeleted' }
    & Pick<EntityDeleted, 'id'>
  )> }
);

export type GetClothesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClothesQuery = (
  { __typename?: 'Query' }
  & { clothes: Array<(
    { __typename?: 'Shirt' }
    & Pick<Shirt, 'id' | 'name' | 'color' | 'size'>
  ) | (
    { __typename?: 'Pants' }
    & Pick<Pants, 'id' | 'name' | 'color' | 'W' | 'L'>
  )> }
);


export const CreatePantsDocument = gql`
    mutation CreatePants($input: PantsInput!) {
  createPants(input: $input) {
    id
  }
}
    `;
export type CreatePantsMutationFn = Apollo.MutationFunction<CreatePantsMutation, CreatePantsMutationVariables>;

/**
 * __useCreatePantsMutation__
 *
 * To run a mutation, you first call `useCreatePantsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePantsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPantsMutation, { data, loading, error }] = useCreatePantsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePantsMutation(baseOptions?: Apollo.MutationHookOptions<CreatePantsMutation, CreatePantsMutationVariables>) {
        return Apollo.useMutation<CreatePantsMutation, CreatePantsMutationVariables>(CreatePantsDocument, baseOptions);
      }
export type CreatePantsMutationHookResult = ReturnType<typeof useCreatePantsMutation>;
export type CreatePantsMutationResult = Apollo.MutationResult<CreatePantsMutation>;
export type CreatePantsMutationOptions = Apollo.BaseMutationOptions<CreatePantsMutation, CreatePantsMutationVariables>;
export const CreateShirtDocument = gql`
    mutation CreateShirt($input: ShirtInput!) {
  createShirt(input: $input) {
    id
  }
}
    `;
export type CreateShirtMutationFn = Apollo.MutationFunction<CreateShirtMutation, CreateShirtMutationVariables>;

/**
 * __useCreateShirtMutation__
 *
 * To run a mutation, you first call `useCreateShirtMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateShirtMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createShirtMutation, { data, loading, error }] = useCreateShirtMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateShirtMutation(baseOptions?: Apollo.MutationHookOptions<CreateShirtMutation, CreateShirtMutationVariables>) {
        return Apollo.useMutation<CreateShirtMutation, CreateShirtMutationVariables>(CreateShirtDocument, baseOptions);
      }
export type CreateShirtMutationHookResult = ReturnType<typeof useCreateShirtMutation>;
export type CreateShirtMutationResult = Apollo.MutationResult<CreateShirtMutation>;
export type CreateShirtMutationOptions = Apollo.BaseMutationOptions<CreateShirtMutation, CreateShirtMutationVariables>;
export const DeleteClothesDocument = gql`
    mutation DeleteClothes($input: DeleteClothesInput!) {
  deleteClothes(input: $input) {
    id
  }
}
    `;
export type DeleteClothesMutationFn = Apollo.MutationFunction<DeleteClothesMutation, DeleteClothesMutationVariables>;

/**
 * __useDeleteClothesMutation__
 *
 * To run a mutation, you first call `useDeleteClothesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteClothesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteClothesMutation, { data, loading, error }] = useDeleteClothesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteClothesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteClothesMutation, DeleteClothesMutationVariables>) {
        return Apollo.useMutation<DeleteClothesMutation, DeleteClothesMutationVariables>(DeleteClothesDocument, baseOptions);
      }
export type DeleteClothesMutationHookResult = ReturnType<typeof useDeleteClothesMutation>;
export type DeleteClothesMutationResult = Apollo.MutationResult<DeleteClothesMutation>;
export type DeleteClothesMutationOptions = Apollo.BaseMutationOptions<DeleteClothesMutation, DeleteClothesMutationVariables>;
export const GetClothesDocument = gql`
    query getClothes {
  clothes {
    ... on Pants {
      id
      name
      color
      W
      L
    }
    ... on Shirt {
      id
      name
      color
      size
    }
  }
}
    `;

/**
 * __useGetClothesQuery__
 *
 * To run a query within a React component, call `useGetClothesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetClothesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetClothesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetClothesQuery(baseOptions?: Apollo.QueryHookOptions<GetClothesQuery, GetClothesQueryVariables>) {
        return Apollo.useQuery<GetClothesQuery, GetClothesQueryVariables>(GetClothesDocument, baseOptions);
      }
export function useGetClothesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetClothesQuery, GetClothesQueryVariables>) {
          return Apollo.useLazyQuery<GetClothesQuery, GetClothesQueryVariables>(GetClothesDocument, baseOptions);
        }
export type GetClothesQueryHookResult = ReturnType<typeof useGetClothesQuery>;
export type GetClothesLazyQueryHookResult = ReturnType<typeof useGetClothesLazyQuery>;
export type GetClothesQueryResult = Apollo.QueryResult<GetClothesQuery, GetClothesQueryVariables>;