import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { toIdValue } from 'apollo-utilities';

import introspectionQueryResultData from './fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const cache: any = new InMemoryCache({
  fragmentMatcher,
  cacheRedirects: {
    Query: {
      getPost: (_, { id }) => {
        return toIdValue(
          cache.config.dataIdFromObject({ __typename: 'Post', id })
        );
      },
    },
  },
});

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, path }) =>
          console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`)
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: 'http://localhost:3000/graphql',
      credentials: 'same-origin',
    }),
  ]),
  cache,
});
