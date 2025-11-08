import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {


    const body = await req.json();
    const { username, content } = body;

    if(!username || !content) {
        return NextResponse.json(
            { error: "Missing username or content"},
            {status: 400}
        )
    }

    try {
        const user = await prisma.user.findUnique({
            where: { username },
            select: { id: true }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Persist the message
        const created = await prisma.message.create({
            data: {
                content,
                userId: user.id
            },
            select: { id: true, content: true, createdAt: true }
        });

        return NextResponse.json({ success: true, message: "Message sent!", data: created }, { status: 201 });
    } 
    catch (error) {
        console.error("Error in creating a message",error);
        return NextResponse.json(
            {error: "Something went wrong while creating a message"},
            {status: 500}
        )
    }
}