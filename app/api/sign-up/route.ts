import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const requestData = await req.json();
  console.log(requestData);

  const token = (Math.random() + 1).toString(36).substring(7);
  const data = { userToken: token };

  return NextResponse.json({ data: JSON.stringify(data) }, { status: 200 });
}
