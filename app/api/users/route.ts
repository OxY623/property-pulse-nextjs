export const runtime = "nodejs";
import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export const GET = async () => {
  try {
    const data = await prisma?.user.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};
