"use client"
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
        return <div className="flex justify-center items-center mt-5 pt-5 text-4xl font-bold ">Loading...</div>
    }
    if(error) {
        return <div>Error: {error}</div>
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
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Your Anonymous Messages 💌</h1>
            <ul className="space-y-3">
                {messages.map((message) => (
                    <li key={message.id} className="p-4 bg-gray-800 rounded-xl shadow">
                        <p>{message.content}</p>
                        <p className="text-sm">
                            {formatDate(message.createdAt)}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}