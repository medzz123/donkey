import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import cookie from 'cookie';
import fetch from 'isomorphic-unfetch';
import withApollo from 'next-with-apollo';

const GRAPHQL_URL = 'https://donkey-engine.herokuapp.com/';

const parseCookies = (req, options = {}) => {
  return cookie.parse(
    req ? req.headers.cookie || '' : document.cookie,
    options
  );
};

export default withApollo((props) => {
  const { initialState, ctx } = props;

  const cookies = parseCookies(ctx?.req);

  const token = cookies.token;

  return new ApolloClient({
    link: createHttpLink({
      fetch,
      uri: GRAPHQL_URL,
      headers: { authorization: token },
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
});
