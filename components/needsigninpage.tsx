'use client';

import { SignInButton } from "./kinde";

export default function NeedSignIn() {


    // create a hero like page that says "You need to sign in to view this page" with a sign in button
    return (
        <div className="flex h-screen justify-center items-center">
            <div>
                <h1 className="text-4xl font-bold mb-4">Ayo, you gotta sign in first</h1>
                <SignInButton />
            </div>
        </div>
    )
}