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
