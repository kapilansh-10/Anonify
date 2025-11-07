import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

export async function GET() {
    
    const session = await getServerSession(authOptions);


    try {
        if(!session || !session.user?.id){
            return NextResponse.json({ error: "Unauthorized"}, {status: 401})
        }

        const userId = session.user.id;

        
        const data = await prisma.message.findMany({
            where: {
                userId: userId
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        return NextResponse.json({messages: data}, {status: 200})
    } 
    catch (error) {
        console.error(error)
        return NextResponse.json({message: "Error in getting the messages"}, {status: 500})
    }

}