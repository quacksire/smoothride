import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Info, Home, PlusCircle, CircleUser } from "lucide-react"
import { SignInButton, Profile, ProfileMenu, LogInOrOutButton} from "./kinde"


import Link from "next/link"
import NewIssueForm from "./forms/new-issue"

export function Sidebar() {
    return (
        <div className="w-[300px]">
            <div className="pb-12 w-full">
                <div className="space-y-4 py-5">
                    <div className="px-3 py-2">
                        <div className="flex flex-col w-full px-4 py-2 space-y-1">
                            <Link href="/">
                                <Button variant="ghost" className="w-full justify-start rounded-3xl space-x-3 h-10">
                                    <Home size={24} />
                                    <p className="text-lg">Home</p>
                                </Button>
                            </Link>
                            <Link href="/profile">
                                <Button variant="ghost" className="w-full justify-start rounded-3xl space-x-3 h-10">
                                    <CircleUser size={24} />
                                    <p className="text-lg">Profile</p>
                                </Button>
                            </Link>
                            <Link href="/about">
                                <Button variant="ghost" className="w-full justify-start rounded-3xl space-x-3 h-10">
                                    <Info size={24} />
                                    <p className="text-lg">About</p>
                                </Button>
                            </Link>
                            <div className="py-2 space-y-3 flex flex-col">
                                <NewIssueForm>
                                    <Button className="rounded-3xl justify-center w-full h-12">
                                        <div className="space-x-4 flex flex-row">
                                            <PlusCircle size={24}/>
                                            <p className="text-[0.9rem] text-base font-bold">Add Issue</p>
                                        </div>
                                    </Button>
                                </NewIssueForm>
                            <LogInOrOutButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

