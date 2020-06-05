import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

const GRAPHQL_URL = "https://donkey-engine.herokuapp.com/";

const link = createHttpLink({
  fetch,
  uri: GRAPHQL_URL,
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {}),
    })
);

// const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
//     cache,
//     link: new HttpLink({
//       uri: 'http://localhost:4000/graphql',
//       headers: {
//         authorization: localStorage.getItem('token'),
//       },
//     }),
//   });
