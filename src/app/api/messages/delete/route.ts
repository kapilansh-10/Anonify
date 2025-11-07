import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";


const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {

    const session  = await getServerSession(authOptions);

    
    try {
        if(!session || !session.user?.id){
            return NextResponse.json({ error: "Unauthorized"}, {status: 401})
        }
        
        const { messageId } = await req.json();

        const message = await prisma.message.findUnique({
            where: {
                id: messageId
            }
        })

        if (!message) {
            return NextResponse.json({ error : "Message not found"}, {status: 404})
        }
        
        if(message.userId === session.user.id){
            const deleteMessage = await prisma.message.delete({
                where: {
                    id: messageId
                }
            })
            return NextResponse.json({success: true, deleteMessage})
        }
        else {
            return NextResponse.json({error: "No message found"}, {status:403} )
        }
    } 
    catch {
        return NextResponse.json({message: "Error in deleting the message"}, {status: 500})
    }


}