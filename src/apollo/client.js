import fetch from 'isomorphic-fetch';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: `/___graphql`, //THIS IS THE URL OF THR GRAPHQL WE WANTO TO QUERY
  fetch: fetch,

  cache: new InMemoryCache(),
});