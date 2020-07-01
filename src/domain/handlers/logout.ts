import Cookie from 'js-cookie';

export const logout = () => {
  Cookie.remove('token');
  // TODO: Fix cookie issues and whatnot when logging out
  window.location.href = '/login';
};
