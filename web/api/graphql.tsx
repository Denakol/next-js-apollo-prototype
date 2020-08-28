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
  clothes: Array<Maybe<Clothes>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createShirt?: Maybe<Shirt>;
  createPants?: Maybe<Pants>;
};


export type MutationCreateShirtArgs = {
  input: ShirtInput;
};


export type MutationCreatePantsArgs = {
  input: PantsInput;
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
  color: ShirtColor;
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

export type GetClothesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetClothesQuery = (
  { __typename?: 'Query' }
  & { clothes: Array<Maybe<(
    { __typename?: 'Shirt' }
    & Pick<Shirt, 'id' | 'name'>
  ) | (
    { __typename?: 'Pants' }
    & Pick<Pants, 'id' | 'name'>
  )>> }
);


export const GetClothesDocument = gql`
    query getClothes {
  clothes {
    ... on Pants {
      id
      name
    }
    ... on Shirt {
      id
      name
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