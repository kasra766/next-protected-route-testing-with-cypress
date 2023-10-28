import { NextRequest } from "next/server";

export default async function POST(req: NextRequest) {
  const requestData = await req.json();
  console.log(requestData);
}
