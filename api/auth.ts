import { create } from "@/api/request";
import type { ApiResponse, ILoginRequest, ILoginResponse } from "@/api/types";

const client = create();

const login = (body: ILoginRequest): ApiResponse<ILoginResponse> =>
  client.post("/auth/login", body);

export { login };
