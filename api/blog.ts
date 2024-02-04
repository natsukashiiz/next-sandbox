import { create } from "@/api/request";
import type { ApiResponse, IPostResponse } from "@/api/types";

const client = create();

const getPosts = (): ApiResponse<IPostResponse> => client.get("/posts");

export { getPosts };
