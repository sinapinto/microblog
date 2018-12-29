import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    currentUser: User
    user(username: String!): User
    getPost(id: ID!): Post
    getPosts(pageSize: Int, after: String): PaginatedPosts!
    search(query: String!): PaginatedSearchResults!
  }

  union SearchResult = Post | User

  type PaginatedSearchResults {
    cursor: String
    hasMore: Boolean
    results: [SearchResult!]!
  }

  type Mutation {
    login(username: String!, password: String!): User
    register(username: String!, password: String!): User
    logout: Boolean
    createPost(input: CreatePostInput!): Post
    deletePost(id: ID!): Boolean
    subscribeToUser(id: ID!): User
    unsubscribeToUser(id: ID!): User
    editProfile(input: EditProfileInput!): User
  }

  type PaginatedPosts {
    cursor: String
    hasMore: Boolean!
    posts: [Post!]!
  }

  input EditProfileInput {
    username: String!
    bio: String!
  }

  input CreatePostInput {
    title: String!
    body: String!
  }

  type User {
    id: ID!
    username: String!
    avatar: String!
    bio: String!
    posts: [Post!]!
    subscriptions: [User!]!
    subscribers: [User!]!
    subscribed: Boolean! # am I subscribed to this user
    isSubscriber: Boolean! # are they subscribed to me
    createdAt: String!
    updatedAt: String!
  }

  type Post {
    id: ID!
    title: String!
    body: String!
    author: User!
    createdAt: String!
    updatedAt: String!
  }
`;
