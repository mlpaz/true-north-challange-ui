import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { IUserSession } from "./types";
import { emptyObj } from "./utils/object";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const cookieMng = cookies();
  const path = req.nextUrl.pathname;
  const session: IUserSession = JSON.parse(
    req.cookies.get("session")?.value || "{}"
  );
  if (emptyObj(session) && path !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!emptyObj(session) && path === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|_next/static|favicon.ico).*)"],
};
