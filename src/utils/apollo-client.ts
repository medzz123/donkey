import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import cookie from 'cookie';
import fetch from 'isomorphic-unfetch';
import withApollo from 'next-with-apollo';

const GRAPHQL_URL = 'https://keynod.herokuapp.com/';

export const parseCookies = (ctx, options = {}) => {
  return cookie.parse(
    ctx?.req ? ctx.req.headers.cookie || '' : document.cookie,
    options
  );
};

export default withApollo((props) => {
  const { initialState, ctx } = props;
  const cookies = parseCookies(ctx);

  const token = cookies.token;

  return new ApolloClient({
    link: createHttpLink({
      fetch,
      uri: GRAPHQL_URL,
      headers: token && { 'x-token': token },
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
});
