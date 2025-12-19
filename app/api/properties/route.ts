export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function GET(request: Request) {
  try {
    const properties = await prisma.property.findMany({});

    return NextResponse.json({
      data: properties,
      meta: {
        count: properties.length,
      },
    });
  } catch (error) {
    console.error("[GET /api/properties]", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
