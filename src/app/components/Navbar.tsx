"use client"

import  Link  from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {


    const { data: session } = useSession();

    return (
        <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
            <Link href="/" className="text-xl font-bold text-pink-600">
                Anonify 💌
            </Link>

            <div>
                { session ? (
                    <>
                        <Link href="/dashboard" className="mr-4 text-gray-700 hover:text-pink-600">
                            Dashboard
                        </Link>
                        <button onClick={() => signOut()}
                            className="text-sm px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200">
                            Sign out
                        </button>
                    </>
                ) : (
                    <button onClick={() => signIn("google")}
                        className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
                        Sign in with Google
                    </button>
                )}
            </div>
        </nav>
    )
}