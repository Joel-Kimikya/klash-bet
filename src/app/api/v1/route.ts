import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    status: 200,
    message: "Welcome To Klash Bet - API",
    version: "1.0.0",
  });
}
