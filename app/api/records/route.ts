import { siteConfig } from "@/config/site";
import {
  ErrorResponse,
  IUserSession,
  Pagination,
  Record,
  RecordApi,
} from "@/types";
import { UNAUTHORIZED_CODE } from "@/types/statusCode";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const directionTranslate: any = {
  ascending: "ASC",
  descending: "DESC",
};

const orderByTranslate: any = {
  date: "createdAt",
  userBalance: "userBalance",
};

export async function GET(req: NextRequest) {
  const cookieMng = cookies();
  const session: IUserSession = JSON.parse(
    cookieMng.get("session")?.value || "{}"
  );
  const page: string = req.nextUrl.searchParams.get("page") || "0";
  const size: string = req.nextUrl.searchParams.get("size") || "10";
  const direction: string =
    req.nextUrl.searchParams.get("direction") || "ascending";
  const orderBy: string =
    req.nextUrl.searchParams.get("orderBy") || "createdAt";
  const operationType: string | null =
    req.nextUrl.searchParams.get("operationType");
  const startDate: string | null = req.nextUrl.searchParams.get("startDate");
  const endDate: string | null = req.nextUrl.searchParams.get("endDate");

  let url =
    `${siteConfig.apiBaseUrL}/api/v1/record?page=${page}&size=${size}` +
    `&orderBy=${orderByTranslate[orderBy]}&direction=${directionTranslate[direction]}`;

  if (operationType) {
    url = `${url}&operationType=${operationType}`;
  }
  if (startDate) {
    const date: Date = new Date(startDate);
    url = `${url}&greaterThanDate=${date.toISOString()}`;
  }
  if (endDate) {
    const date: Date = new Date(endDate);
    url = `${url}&lessThanDate=${date.toISOString()}`;
  }
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  const statusCode = response.status;
  if (statusCode == UNAUTHORIZED_CODE) {
    await cookieMng.delete("session");
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!response.ok) {
    const body: ErrorResponse = await response.json();
    return NextResponse.json(body, { status: response.status });
  }
  const pageResponse: Pagination<any> = await response.json();
  const records: Record[] = pageResponse.content.map((r) => mapResponse(r));
  pageResponse.content = records;
  return NextResponse.json(pageResponse);
}

function mapResponse(recordApi: RecordApi): Record {
  return {
    id: recordApi.id,
    userBalance: recordApi.userBalance,
    amount: recordApi.amount,
    type: recordApi.operation.type,
    date: recordApi.date,
    operationResponse: recordApi.operationResponse,
  };
}
