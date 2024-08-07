import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// NOTE: Useful Prisma CRUD API: https://www.prisma.io/docs/orm/prisma-client/queries/crud 
export async function GET(request:Request) {
    const users = await prisma.user.findMany();
    console.log(users);
    return NextResponse.json(users);
}