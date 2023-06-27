import { prisma } from "@/lib/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { data } = await request.json();
    console.log(data);

    const category = await prisma.category.create({
      data: {
        ...data,
      },
    });

    return NextResponse.json(category);
  } catch (e) {
    console.log(e);
    return NextResponse.error();
  }
}
