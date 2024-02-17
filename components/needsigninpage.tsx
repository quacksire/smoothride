'use client';

import { SignInButton } from "./kinde";

export default function NeedSignIn() {
    // create a hero like page that says "You need to sign in to view this page" with a sign in button
    return (
            <div className="fixed p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Info
                        </h3>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400 h-10">
                            You need to sign in to access this page!
                        </p>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 justify-center">
                        <SignInButton className="w-100 justify-start"/>
                    </div>
                </div>
            </div>
    )
}