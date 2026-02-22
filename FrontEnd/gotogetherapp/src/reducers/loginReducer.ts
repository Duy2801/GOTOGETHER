import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { setItem } from '../utils/storage';
import { KEY_STORAGE } from '../constants/KeyStorage';

type LoginState = {
  user: string;
  accessToken: string;
  startDate: string | null;
};

const initialState: LoginState = {
  user: '',
  accessToken: '',
  startDate: null,
};

export const LoginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state, action) => {
      setItem(KEY_STORAGE.token, action.payload.accessToken);
      setItem(KEY_STORAGE.user, action.payload.user);
      if (action.payload.startDate) {
        setItem(KEY_STORAGE.startDate, action.payload.startDate);
      }
      return {
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        startDate: action.payload.startDate ? action.payload.startDate : null,
      };
    },
    logout: () => {
      setItem(KEY_STORAGE.token, '');
      setItem(KEY_STORAGE.user, '');
      setItem(KEY_STORAGE.startDate, '');
      return initialState;
    },
  },
});

export const { login, logout } = LoginReducer.actions;
export default LoginReducer.reducer;
