"use client"

import { signIn, useSession } from "next-auth/react"
import { toast } from "sonner";
import Link from "next/link"

export default function Hero() {

    const { data: session, status } = useSession();

    const handleCopy = () => {
        if(!session?.user?.username) {
            toast.error("Sign in to get the profile link");
            return;
        }
        const link = `${window.location.origin}/u/${session.user.username}`;
        navigator.clipboard.writeText(link);
        toast.success("Profile link copied! 🔗")
    }

    return (
        <section className="relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-b from-pink-50 via-white to-pink-100"/>
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-300/20 blur-3xl"/>
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-300/20 blur-3xl"/>

            <div className="relative mx-auto max-w-5xl px-6 py-20 text-center">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                    Get honest feedback-<span>anonymously</span>💌
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-balance text-gray-600">
                    Share your unique link. Friends send messages. You read them privately.
                    No signup hasslers for senders.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row min-h-[60px]">
                    {status === "loading" ? null : session ? (
                        <>
                            <Link 
                                href="/dashboard" 
                                className="w-full rounded-lg bg-pink-600 px-5 py-3 text-white shadow-sm transition hover:bg-pink-700 sm:w-auto">
                                Go to Dashboard
                            </Link>
                            <button
                                onClick={handleCopy}
                                className="w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-800 transition hover:bg-gray-50 sm:w-auto"    
                            >
                                Copy My Profile Link
                            </button>
                        </>
                    ): (
                        <button 
                            onClick={() => signIn()}
                            className="w-full rounded-lg bg-pink-600 px-5 py-3 text-white shadow-sm transition hover:bg-pink-700 sm:w-auto"    
                        >
                            Sign in with Google
                        </button>
                    )}
                </div>

                <p className="mt-4 text-sm text-gray-500">
                    No account needed to send messages. Your identity stays hidden. 👀
                </p>
            </div>
        </section>
    )
}