export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const segments = url.pathname.split("/");
  const id = segments[segments.length - 1];
  try {
    //const id = await context.params.id;

    const property = await prisma.property.findFirst({
      where: { id },
    });

    if (!property) {
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ data: property });
  } catch (error) {
    console.error(
      `[GET /api/properties/:id] Error fetching property with id=${String(
        id
      )}:`,
      error
    );

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
