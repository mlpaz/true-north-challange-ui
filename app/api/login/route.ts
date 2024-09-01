import { siteConfig } from "@/config/site";
import { ErrorResponse, Ilogin, IUserSession } from "@/types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieMng = cookies();
  const login: Ilogin = await req.json();
  const response = await fetch(`${siteConfig.apiBaseUrL}/api/v1/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  });
  const body: IUserSession = await response.json();
  if (response.ok) {
    cookieMng.set("session", JSON.stringify(body), {
      httpOnly: true,
      secure: true,
    });
  } else {
    const errorResponse: ErrorResponse = {
      message: "Invalid Email or Password.",
    };
    return NextResponse.json(errorResponse, { status: 401 });
  }
  return NextResponse.json({ credit: body.credit });
}
