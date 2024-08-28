import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const cookieMng = cookies();
  await cookieMng.delete("session");
  return NextResponse.json({});
}
