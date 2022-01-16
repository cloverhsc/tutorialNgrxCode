import { createReducer, on } from '@ngrx/store';

import * as LoginPageActions from './login-page.action';
import { LoginResponse } from './login-constant';

export const loginInitialState: LoginResponse = {
  token: '',
  username: '',
  success: false,
};

export const loginReducer = createReducer(
  loginInitialState,
  on(LoginPageActions.loginFailure, (state, { error }) => ({
    ...state,
    error: 'Login failed',
  })),
  on(LoginPageActions.loginSuccess, (state, { resp }) => ({
    ...state,
    username: resp.username,
    token: resp.token,
    success: true,
  }))
);
