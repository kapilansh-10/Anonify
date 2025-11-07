import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";


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
        
        if(message.userId === session.user.id){
            const deleteMessage = await prisma.message.delete({
                where: {
                    id: messageId
                }
            })
            return NextResponse.json({deleteMessage}, {status: 200})
        }
        else {
            return NextResponse.json({message: "No message found"}, {status:403} )
        }
    } 
    catch (error) {
        console.error(error)
        return NextResponse.json({message: "Error in deleting the message"}, {status: 500})
    }


}