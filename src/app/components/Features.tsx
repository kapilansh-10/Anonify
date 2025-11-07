"use client"

import { EyeOff, Link2, Shield } from "lucide-react"

const features = [
    {
        icon: Shield,
        title: "100% Anonymous",
        description: "No names, no accounts. People can message you freely without revealing their identity.",
    },
    {
        icon: Link2,
        title: "Shareable Link",
        description: "Get your unique profile link and share it anywhere — Instagram, X, or WhatsApp.",
    },
    {
        icon: EyeOff,
        title: "Private Inbox",
        description: "Only you can see the messages you receive. Delete them anytime you want.",
    },
]

export default function Features() {

    return (
        <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold mb-12 text-gray-900">
                    Why people love <span className="text-pink-600">Anonify</span>💗
                </h2>
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-pink-50/40 p-8 rounded-2xl border border-pink-100 hover:shadow-md transition"
                        >
                        <feature.icon className="h-10 w-10 text-pink-600 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}