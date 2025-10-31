"use client"

import { useState } from "react";
import { useParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


export default function UserPage({params}) {

    const { username } = useParams();

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleSend = async () => {

        if(!message.trim()) {
            alert("Message cannot be empty");
            return;
        }
        setLoading(true);
        const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ username, content: message })
        })


        if(response.ok) {
            alert("✅ Message sent successfully!");
            setMessage("");
        }
        else {
            alert("User not found")
            setStatus("❌ User not found")
        }

        setLoading(false)
    }

    return (
        <div className="flex justify-center items-center flex-col h-screen mb-5 bg-pink-50">
            <h1 className="font-bold text-2xl mb-10">Send an annonymous message to user 💬</h1>
            
            {/* <textarea className="bg-yellow-100 pl-4 pr-4 rounded-2xl "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
            /> */}

            <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="mb-5"
            />

            <Button onClick={handleSend}>
                {loading ? "Sending..." : "Send Message"}
            </Button>

            {status && <p>{status}</p>}
        </div>
    )
}