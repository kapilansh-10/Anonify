import { LogIn, MessageCircle, Share2 } from "lucide-react"


export default function HowItWorks() {


    const steps = [
        {
            icon: LogIn,
            title: "Sign in with Google",
            description:
            "Create your Anonify profile instantly using your Google account - no setup required"
        },
        {
            icon: Share2,
            title: "Share your link",
            description:
            "Copy your unique link and share it on Instagram, WhatsApp, or X. Let people send you honest messages."
        },
        {
            icon: MessageCircle,
            title: "Read messages anonymously",
            description:
            "Open your dashboard to see messages. Delete them anytime — your identity stays private.",
            }, 
    ]

    return (
        <section className="py-24 bg-gradient-to-b from-white to-pink-50">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-semibold mb-12 text-gray-900">
                    How <span className="text-pink-600">Anonify</span> Works 🚀
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            className="flex flex-col items-center text-center max-w-sm bg-white/70 backdrop-blur-sm border border-pink-100 rounded-2xl p-8 hover:shadow-lg transition"
                        >
                            <div className="h-14 w-14 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 mb-4">
                                <step.icon className="h-7 w-7"/>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}