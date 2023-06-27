import { prisma } from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { data } = await request.json();
    console.log(data);

    const music = await prisma.music.create({
      data: {
        ...data,
      },
    });

    return NextResponse.json(music);
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
