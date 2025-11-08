// app/components/auth-buttons.tsx
"use client";
import { signIn, signOut } from "next-auth/react";

export function SignInButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
    >
      Sign in with Google
    </button>
  );
}

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="text-sm px-3 py-1 bg-gray-100 rounded-lg hover:bg-gray-200"
    >
      Sign out
    </button>
  );
}
