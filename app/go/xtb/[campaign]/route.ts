import { NextResponse } from "next/server";

import { getXtbCampaign } from "@/src/config/investment";

export async function GET(_request: Request, { params }: { params: Promise<{ campaign: string }> }) {
  const { campaign } = await params;
  const destination = getXtbCampaign(campaign);

  if (!destination || !destination.active) {
    return NextResponse.json({ error: "Unknown affiliate destination" }, { status: 404 });
  }

  return NextResponse.redirect(destination.externalUrl, { status: 307, headers: { "Cache-Control": "no-store" } });
}
