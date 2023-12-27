import { NextRequest, NextResponse } from "next/server";

import { Games } from "./helper";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({
    status: 200,
    message: "success",
    games: Games,
  });
}
