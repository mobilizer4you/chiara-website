import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: "Book";
  author?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  storeUserInformation: StoreUserInformation;
};

export type MutationStoreUserInformationArgs = {
  storeUserInput: StoreUserInput;
};

export type MutationResponse = {
  __typename?: "MutationResponse";
  message: Scalars["String"];
  success: Scalars["Boolean"];
};

export type Query = {
  __typename?: "Query";
  books?: Maybe<Array<Maybe<Book>>>;
};

export type StoreUserInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  userName: Scalars["String"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  id: Scalars["String"];
  userName: Scalars["String"];
};

export type StoreUserInformation = {
  __typename?: "storeUserInformation";
  status: MutationResponse;
  user: User;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Book: ResolverTypeWrapper<Book>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: ResolverTypeWrapper<MutationResponse>;
  Query: ResolverTypeWrapper<{}>;
  StoreUserInput: StoreUserInput;
  String: ResolverTypeWrapper<Scalars["String"]>;
  User: ResolverTypeWrapper<User>;
  storeUserInformation: ResolverTypeWrapper<StoreUserInformation>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Book: Book;
  Boolean: Scalars["Boolean"];
  Mutation: {};
  MutationResponse: MutationResponse;
  Query: {};
  StoreUserInput: StoreUserInput;
  String: Scalars["String"];
  User: User;
  storeUserInformation: StoreUserInformation;
}>;

export type BookResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Book"] = ResolversParentTypes["Book"]
> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  storeUserInformation?: Resolver<
    ResolversTypes["storeUserInformation"],
    ParentType,
    ContextType,
    RequireFields<MutationStoreUserInformationArgs, "storeUserInput">
  >;
}>;

export type MutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MutationResponse"] = ResolversParentTypes["MutationResponse"]
> = ResolversObject<{
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = ResolversObject<{
  books?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Book"]>>>,
    ParentType,
    ContextType
  >;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type StoreUserInformationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["storeUserInformation"] = ResolversParentTypes["storeUserInformation"]
> = ResolversObject<{
  status?: Resolver<
    ResolversTypes["MutationResponse"],
    ParentType,
    ContextType
  >;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Book?: BookResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  storeUserInformation?: StoreUserInformationResolvers<ContextType>;
}>;
