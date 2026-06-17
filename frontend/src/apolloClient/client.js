import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import {url} from '../api/api.js'
const httpLink = createHttpLink({
  uri: `${url}/graphql`, 
  // replace with your backend GraphQL URL
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;