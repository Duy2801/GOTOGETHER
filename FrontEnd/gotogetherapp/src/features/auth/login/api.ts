import { api } from '../../../api';

export type LoginBody = {
  email: string;
  password: string;
};

export const apiLogin = async (body: LoginBody) => {
  const url = '/auth/login';
  return api.post(url, body);
};

