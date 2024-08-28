import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { IUserSession } from "./types";
import { cookies } from "next/headers";
import { emptyObj } from "./utils/object";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  console.info("path", path);
  const cookieStore = cookies();
  const session: IUserSession = JSON.parse(
    cookieStore.get("session")?.value || "{}"
  );
  console.info("path", path);
  if (emptyObj(session) && path !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!emptyObj(session) && path === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }
}

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|_next/static|favicon.ico).*)",
  ],
};
