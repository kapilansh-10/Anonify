"use client"

import { useState } from "react";
import { useParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export default function UserPage() {

    const { username } = useParams();

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {

        if(!message.trim()) {
            toast.error("Message cannot be empty");
            return;
        }
        setLoading(true);
        try {
            const response = await fetch("/api/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({ username, content: message })
            })
    
    
            if(response.ok) {
                toast.success(" Message sent successfully!");
                setMessage("");
            }
            else {
                toast.error("User not found")
                // setStatus("❌ User not found")
            }
        } 
        catch {
            toast.error("Something went wrong. Try again !")
        }

        setLoading(false)
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-pink-50 to-pink-100">
            <Card className="p-8 w-[90%] sm:w-full max-w-lg bg-white/80 backdrop-blur-lg shadow-lg hover:shadow-xl transition-all rounded-2xl border border-pink-100">
                <h1 className="text-2xl font-semibold text-center mb-4">
                Send an annonymous message to{" "}
                <span className="text-pink-600">@{username}</span>    
            </h1>

            <p className="text-sm text-gray-500 text-center mb-6">
            Your identity will remain anonymous 👀
            </p>


            <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="min-h-[120px] mb-4 border-gray-300 focus:border-pink-400 focus:ring-pink-400 rounded-xl resize-none"
            />

            <Button 
                onClick={handleSend}
                disabled={loading}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition"
            >
                {loading ? "Sending..." : "Send Message"}
            </Button>
            <Button
                onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                toast.success("Copied profile link 🔗");
                }}
                variant="outline"
                className="mt-6 w-full bg-black text-white hover:bg-gray-800 rounded-xl"
                >
            Copy Profile Link
            </Button>
            </Card>

        </div>
    )
}