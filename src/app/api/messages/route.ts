import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

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
        })

        if(!user) {
            return NextResponse.json({error: "User not found"}, {status: 404});
        }

        const message = await prisma.message.create({
            data: {
                content,
                userId: user.id // link the message to the user
            }
        })
        return NextResponse.json({ success: true, message: "Message sent!"})
    } 
    catch (error) {
        console.error("Error in creating a message",error);
        return NextResponse.json(
            {error: "Something went wrong while creating a message"},
            {status: 500}
        )
    }
}