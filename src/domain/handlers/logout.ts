import Cookie from 'js-cookie';
import Router from 'next/router';

export const logout = () => {
  Cookie.remove('token');
  // TODO: Fix cookie issues and whatnot when logging out
  Router.replace('/login');
};
