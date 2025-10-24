"use client"

import { useState } from "react";
import { useParams } from "next/navigation";


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
        <div >
            <h1>Send an annonymous message to user</h1>
            
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
            />

            <button onClick={handleSend}>
                {loading ? "Sending..." : "Send Message"}
            </button>

            {status && <p>{status}</p>}
        </div>
    )
}