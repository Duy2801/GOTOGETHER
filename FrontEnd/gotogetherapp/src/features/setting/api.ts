import { api } from '../../api';

export const apiLogout = async () => {
  const url = '/auth/logout';
  return api.post(url);
};
