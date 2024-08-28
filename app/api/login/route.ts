import { siteConfig } from "@/config/site";
import { Ilogin, IUserSession } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieMng = cookies();
  const login: Ilogin = await req.json();
  console.info("login ", login);
  const response = await fetch(`${siteConfig.apiBaseUrL}/api/v1/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  });

  if (response.ok) {
    const body: IUserSession = await response.json();
    cookieMng.set("session", JSON.stringify(body), {
      httpOnly: true,
      secure: true,
    });
  } else {
    return NextResponse.json(
      { error: "Invalid Email or Password." },
      { status: 401 }
    );
  }
  return NextResponse.json({});
}
