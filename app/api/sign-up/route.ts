import { NextRequest, NextResponse } from "next/server";
import { tokenMaker } from "@/utils/token-maker";

export async function POST(req: NextRequest) {
  const requestData = await req.json();
  console.log(requestData);

  const token = tokenMaker();
  const data = { userToken: token };

  return NextResponse.json({ data: JSON.stringify(data) }, { status: 200 });
}
