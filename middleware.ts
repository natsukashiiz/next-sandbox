import { NextRequest, NextResponse } from "next/server";

import type { TokenPayload } from "@/api/types";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const token = request.cookies.get("token");
  if (token && token.value) {
    const payload = JSON.parse(atob(token.value.split(".")[1])) as TokenPayload;
    if (payload.exp > new Date().getTime() / 1000) {
      return NextResponse.next();
    } else {
      request.cookies.delete("token");
      const response = NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
      response.cookies.delete("token");

      return response;
    }
  } else {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/blogs/:path*"],
};
