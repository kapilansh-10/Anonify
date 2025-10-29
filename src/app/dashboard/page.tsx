"use client"
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react"

export default function Dashboard() {

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
            }
            setLoading(false)
        }
        fetchMessages()
    },[])

    if(loading){
        return <div className="text-center mt-10 text-gray-500">Loading...</div>
    }
    if(error) {
        return <div className="text-center mt-10 text-red-500">Error: {error}</div>
    }
    if(messages.length === 0) {
        return <div>No messages yet</div>
    }

    const formatDate = (isoDate) => {
        return new Date(isoDate).toLocaleString("en-GB",{
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        })
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold mb-4">Your Anonymous Messages 💌</h1>
                <button>Sign Out</button>
            </div>

        {messaegs.length === 0  ? (
            <p className="text-gray-500 text-center mt-10">No messages Yet</p>
        ) : (
            <div>
                {messages.map((message) => (
                    <Card key={message.id} className="p-4">
                        <p className="text-gray-800">{message.content}</p>
                        <p className="text-sm text-gray-500 mt-2">{formatDate(message.createdAt)}</p>
                    </Card>
                ))}
            </div>
            )}
        </div>
    )
}