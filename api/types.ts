import { AxiosResponse } from "axios";

export type ApiResponse<T> = Promise<AxiosResponse<T>>;

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
}

export interface IPostResponse {
  posts: IPost[];
  total: number;
  skip: number;
  limit: number;
}

export interface ILoginRequest {
  username: string;
  password: string;
  expiresInMins?: number;
}

export interface ILoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface TokenPayload {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  iat: number;
  exp: number;
}

export interface AuthState {
  token: string | null;
  payload: TokenPayload | null;
}
