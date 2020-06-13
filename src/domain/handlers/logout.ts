import Cookie from 'js-cookie';
import Router from 'next/router';

export const logout = () => {
  Cookie.remove('token');
  Router.push('/login');
};
