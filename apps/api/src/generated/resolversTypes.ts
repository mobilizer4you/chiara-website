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

export const AuthProvider = {
  Email: "EMAIL",
  Google: "GOOGLE",
} as const;

export type AuthProvider = typeof AuthProvider[keyof typeof AuthProvider];
export type Book = {
  __typename?: "Book";
  author?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type GetUserInformationResponse = {
  __typename?: "GetUserInformationResponse";
  status: MutationResponse;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: "Mutation";
  storeUserInformation: StoreUserInformationResponse;
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
  getUserInformation: GetUserInformationResponse;
};

export type QueryGetUserInformationArgs = {
  userId: Scalars["String"];
};

export type StoreUserInformationResponse = {
  __typename?: "StoreUserInformationResponse";
  status: MutationResponse;
  user: User;
};

export type StoreUserInput = {
  authProvider: AuthProvider;
  email: Scalars["String"];
  id: Scalars["String"];
  username: Scalars["String"];
};

export type User = {
  __typename?: "User";
  authProvider: AuthProvider;
  email: Scalars["String"];
  id: Scalars["String"];
  username: Scalars["String"];
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
  AuthProvider: AuthProvider;
  Book: ResolverTypeWrapper<Book>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  GetUserInformationResponse: ResolverTypeWrapper<GetUserInformationResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: ResolverTypeWrapper<MutationResponse>;
  Query: ResolverTypeWrapper<{}>;
  StoreUserInformationResponse: ResolverTypeWrapper<StoreUserInformationResponse>;
  StoreUserInput: StoreUserInput;
  String: ResolverTypeWrapper<Scalars["String"]>;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Book: Book;
  Boolean: Scalars["Boolean"];
  GetUserInformationResponse: GetUserInformationResponse;
  Mutation: {};
  MutationResponse: MutationResponse;
  Query: {};
  StoreUserInformationResponse: StoreUserInformationResponse;
  StoreUserInput: StoreUserInput;
  String: Scalars["String"];
  User: User;
}>;

export type BookResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Book"] = ResolversParentTypes["Book"]
> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GetUserInformationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["GetUserInformationResponse"] = ResolversParentTypes["GetUserInformationResponse"]
> = ResolversObject<{
  status?: Resolver<
    ResolversTypes["MutationResponse"],
    ParentType,
    ContextType
  >;
  user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = ResolversObject<{
  storeUserInformation?: Resolver<
    ResolversTypes["StoreUserInformationResponse"],
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
  getUserInformation?: Resolver<
    ResolversTypes["GetUserInformationResponse"],
    ParentType,
    ContextType,
    RequireFields<QueryGetUserInformationArgs, "userId">
  >;
}>;

export type StoreUserInformationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["StoreUserInformationResponse"] = ResolversParentTypes["StoreUserInformationResponse"]
> = ResolversObject<{
  status?: Resolver<
    ResolversTypes["MutationResponse"],
    ParentType,
    ContextType
  >;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = ResolversObject<{
  authProvider?: Resolver<
    ResolversTypes["AuthProvider"],
    ParentType,
    ContextType
  >;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Book?: BookResolvers<ContextType>;
  GetUserInformationResponse?: GetUserInformationResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  StoreUserInformationResponse?: StoreUserInformationResponseResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;
