import { siteConfig } from "@/config/site";
import { ErrorResponse, IUserSession, OperationRequest } from "@/types";
import { UNAUTHORIZED_CODE } from "@/types/statusCode";
import { UUID } from "crypto";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: UUID } }
) {
  const cookieMng = cookies();
  const session: IUserSession = JSON.parse(
    cookieMng.get("session")?.value || "{}"
  );
  const response = await fetch(
    `${siteConfig.apiBaseUrL}/api/v1/record/${params.id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${session.token}`,
      },
    }
  );
  const statusCode = response.status;
  if (statusCode == UNAUTHORIZED_CODE) {
    await cookieMng.delete("session");
    return NextResponse.json({}, { status: UNAUTHORIZED_CODE });
  }
  if (!response.ok) {
    const body: ErrorResponse = await response.json();
    return NextResponse.json(body, { status: response.status });
  }
  const body: IUserSession = await response.json();
  return NextResponse.json(body);
}
