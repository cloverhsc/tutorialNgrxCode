export interface LoginResponse {
  token: string;
  username: string;
  success: boolean;
}

export interface LoginForm {
  username: string;
  password: string;
}
