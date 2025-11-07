"use client"
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useParams } from "next/navigation";



export default function Dashboard() {
    
    // const { username } = useParams();

    const { data: session } = useSession();

    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        const fetchMessages = async () => {
            setLoading(true)
            try {
                const response = await fetch("/api/messages/get");
                const data = await response.json();
                setMessages(data.messages)  
            } 
            catch (error) {
                setError("Failed to load messages ❌")
                console.error("Failed to load messages")
            }
            setLoading(false)
        }
        fetchMessages()
    },[])

    console.log("Session Data",session)

    const handleCopyLink = () => {

        if(!session?.user?.username){
            toast.error("You must be logged in to copy your link ❌");
            return;
        }

        const link = `${window.location.origin}/u/${session?.user?.username}`;
        navigator.clipboard.writeText(link);
        toast.success("Profile link copied to clipboard! 📋");
    }

    const handleDelete = async (messageId) => {

        if(!confirm("Are you sure you want to delete this message?")) return;

        try {
            const response = await fetch("/api/messages/delete", {
                method: "DELETE",
                body: JSON.stringify({
                    messageId
                })
            })
            if (!response.ok) {
                const data = await response.json();
                toast.error(data.error || "Failed to delete message");
                return;
            }
            if(response.ok) {
                toast.success("Message deleted ✅");
                setMessages(prev => prev.filter(msg => msg.id !== messageId))
            }
        } 
        catch (error) {
            toast.error("Failed to delete message ❌")
            console.error("Failed to delete message")
        }
    }


    if(loading){
        return <div className="text-center mt-10 text-gray-500">Loading...</div>
    }
    if(error) {
        return <div className="text-center mt-10 text-red-500">Error: {error}</div>
    }
    if(!messages || messages.length === 0) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-neutral-50 to-neutral-100 text-center">
                <div className="p-8 bg-white shadow-sm rounded-2xl border border-gray-200 max-w-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                        No messages Yet 💌
                    </h2>
                    <p className="text-gray-500 mt-2">
                        You haven't received any anonymous messages yet.
                        Share your link and see what people say
                    </p>
                    <button className="mt-4 px-4 py-2 rounded-lg  bg-black text-white hover:bg-gray-800 transition"
                    onClick={handleCopyLink}
                    >
                        Copy Profile Link
                    </button>
                </div>
            </div>
        )
    }

    const formatDate = (isoDate) => {
        return new Date(isoDate).toLocaleString("en-GB",{
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        })
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-neutral-50 p-6">
            <div className="max-w-3xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold tracking-tight">Your Anonymous Messages 💌</h1>
                <Button 
                    variant="outline" 
                    onClick={() => signOut()} 
                    className="text-sm font-medium hover:bg-gray-100"
                    >
                Sign Out</Button>
            </div>

        {messages.length === 0  ? (
            <p className="items-center justify-center h-64 rounded-lg border border-dashed border-gray-300 text-gray-500 bg-white/70 backdrop-blur-sm shadow-sm">No messages Yet</p>
        ) : (
            <div className="flex flex-col">
                {messages.map((message) => (
                    <Card key={message.id} className="justify-content: space-evenly p-5 mt-4 shadow-sm border border-gray-200 hover:shadow-md transition rounded-2xl bg-white">
                        <p className="text-gray-800 text-base">{message.content}</p>
                        <p className="text-xs text-gray-500 mt-2">{formatDate(message.createdAt)}</p>
                        <Button variant={"destructive"} className="text-sm w-fit bg-red-500" onClick={() => handleDelete(message.id)}>Delete 🗑️</Button>
                    </Card>
                ))}
            </div>
            )}
        </div>
        </div>
    )
}