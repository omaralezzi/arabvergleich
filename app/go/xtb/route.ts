import { NextResponse } from "next/server";

import { xtbCampaigns } from "@/src/config/investment";

export function GET() {
  return NextResponse.redirect(xtbCampaigns.home.externalUrl, { status: 307, headers: { "Cache-Control": "no-store" } });
}
