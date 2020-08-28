import { GraphQLResolveInfo } from 'graphql';
import { IContext } from '../context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  clothes: Array<Maybe<Clothes>>;
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

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  createPants?: Maybe<Pants>;
  createShirt?: Maybe<Shirt>;
};


export type MutationCreatePantsArgs = {
  input: PantsInput;
};


export type MutationCreateShirtArgs = {
  input: ShirtInput;
};

export type Subscription = {
  __typename?: 'Subscription';
  _?: Maybe<Scalars['Boolean']>;
};



export type ResolverTypeWrapper<T> = Promise<T | undefined> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ShirtColor: ShirtColor;
  Shirt: ResolverTypeWrapper<Shirt>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Pants: ResolverTypeWrapper<Pants>;
  Clothes: ResolversTypes['Shirt'] | ResolversTypes['Pants'];
  ClothesQueryInput: ClothesQueryInput;
  Query: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ShirtInput: ShirtInput;
  PantsInput: PantsInput;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Shirt: Shirt;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  Pants: Pants;
  Clothes: ResolversParentTypes['Shirt'] | ResolversParentTypes['Pants'];
  ClothesQueryInput: ClothesQueryInput;
  Query: {};
  Boolean: Scalars['Boolean'];
  ShirtInput: ShirtInput;
  PantsInput: PantsInput;
  Mutation: {};
  Subscription: {};
};

export type ShirtResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Shirt'] = ResolversParentTypes['Shirt']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['ShirtColor'], ParentType, ContextType>;
  size?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PantsResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Pants'] = ResolversParentTypes['Pants']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  W?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  L?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ClothesResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Clothes'] = ResolversParentTypes['Clothes']> = {
  __resolveType: TypeResolveFn<'Shirt' | 'Pants', ParentType, ContextType>;
};

export type QueryResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  clothes?: Resolver<Array<Maybe<ResolversTypes['Clothes']>>, ParentType, ContextType>;
};

export type MutationResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  _?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  createPants?: Resolver<Maybe<ResolversTypes['Pants']>, ParentType, ContextType, RequireFields<MutationCreatePantsArgs, 'input'>>;
  createShirt?: Resolver<Maybe<ResolversTypes['Shirt']>, ParentType, ContextType, RequireFields<MutationCreateShirtArgs, 'input'>>;
};

export type SubscriptionResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _?: SubscriptionResolver<Maybe<ResolversTypes['Boolean']>, "_", ParentType, ContextType>;
};

export type Resolvers<ContextType = IContext> = {
  Shirt?: ShirtResolvers<ContextType>;
  Pants?: PantsResolvers<ContextType>;
  Clothes?: ClothesResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = IContext> = Resolvers<ContextType>;
