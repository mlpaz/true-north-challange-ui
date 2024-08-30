import { siteConfig } from "@/config/site";
import { ErrorResponse, IUserSession, OperationRequest } from "@/types";
import { UNAUTHORIZED_CODE } from "@/types/statusCode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieMng = cookies();
  const session: IUserSession = JSON.parse(
    cookieMng.get("session")?.value || "{}"
  );
  const request: OperationRequest = await req.json();
  console.info("request ", request);
  console.info("session token", session.token);
  const response = await fetch(`${siteConfig.apiBaseUrL}/api/v1/operation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.token}`,
    },
    body: JSON.stringify(request),
  });
  const statusCode = response.status;
  if (statusCode == UNAUTHORIZED_CODE) {
    await cookieMng.delete("session");
    return NextResponse.json({}, { status: UNAUTHORIZED_CODE });
  }
  if (!response.ok) {
    const body: ErrorResponse = await response.json();
    console.info("body ", body);
    return NextResponse.json(body, { status: response.status });
  }
  const body: IUserSession = await response.json();
  return NextResponse.json(body);
}
