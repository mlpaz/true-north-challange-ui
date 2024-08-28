import { siteConfig } from "@/config/site";
import { Ilogin, IUserSession } from "@/types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookieMng = cookies();
  const session: IUserSession = JSON.parse(
    cookieMng.get("session")?.value || "{}"
  );

  return NextResponse.json(session);
}
