"use client"

import  Link  from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { SignInButton, SignOutButton } from "./auth-buttons";

export default function Navbar() {


    const { data: session, status } = useSession();

    return (
        <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
            <Link href="/" className="text-xl font-bold text-pink-600">
                Anonify 💌
            </Link>

            <div className="min-w-40">
                {status === "loading" ? null : session ? (
                    <>
                        <Link href="/dashboard" className="mr-4 text-gray-700 hover:text-pink-600">
                            Dashboard
                        </Link>
                        <SignOutButton/>
                    </>
                ) : (
                    <SignInButton/>
                )}
            </div>
        </nav>
    )
}