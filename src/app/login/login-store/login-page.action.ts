import { LoginForm, LoginResponse } from './login-constant';
import { createAction, props } from '@ngrx/store';

export const login = createAction('[Login Page] Login', props<LoginForm>());

export const loginSuccess = createAction(
  '[Login Page] Login Success',
  (resp: LoginResponse) => ({ resp })
);

export const loginFailure = createAction(
  '[Login Page] Login Failure',
  (error: string) => ({ error })
);
