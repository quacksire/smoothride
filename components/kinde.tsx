'use client'
import {RegisterLink, LoginLink, LogoutLink, CreateOrgLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import {Button} from "@/components/ui/button";
import {Skeleton} from "@/components/ui/skeleton";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {usePathname} from "next/navigation";
import { User, LogOut, RefreshCcw } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils";


export function SignInButton({className} : {className?: string}) {
    const pathname = usePathname()
    console.log(pathname)

    return (
        <LoginLink postLoginRedirectURL={pathname}>
            <Button variant="outline" className={cn(className, "rounded-3xl justify-center w-full h-12")}>
                <div className="space-x-2 flex flex-row">
                  <User size={24}/>
                  <p className="text-[0.9rem] text-base font-bold">Sign in</p>
                </div>
            </Button>
        </LoginLink>
    )
}

export function SignOutButton({className} : {className?: string}) {
    return (<LogoutLink className={'w-full'}>
        <Button variant="outline" className={cn(className, "rounded-3xl justify-center w-full h-12")}>
        <div className="space-x-2 flex flex-row">
                  <LogOut size={24}/>
                  <p className="text-[0.9rem] text-base font-bold">Logout</p>
                </div>
            </Button>
    </LogoutLink>)
}


export function ProfileMenu({className, children}: {className?: string, children?: React.ReactNode}) {

    const {
        isLoading,
        user,
        isAuthenticated
    } = useKindeBrowserClient();


    return (
    <DropdownMenu>
        <DropdownMenuTrigger className={className}>{children}</DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <LogInOrOutButton className={'w-full'} />
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
        )
    

}


export function LogInOrOutButton({className} : {className?: string}) {
    const {
        isLoading,
        user,
        isAuthenticated
    } = useKindeBrowserClient();

    if (isLoading) {
        return (
            <Button variant={"outline"} className="rounded-3xl justify-center w-full h-12">
            <RefreshCcw className="animate-spin" />
            </Button>
        )
    }

    if (isAuthenticated) {
        return <SignOutButton className={className}  />
    }

    return <SignInButton className={className} />
}


export function Profile() {
    const {
        isLoading,
        user,
        isAuthenticated
    } = useKindeBrowserClient();


    if (isLoading) {
        return (
            <div className="max-w-[300px] w-full flex items-center gap-3">
                <div>
                    <Skeleton className="flex rounded-full w-12 h-12"/>
                </div>
                <div className="w-full flex flex-col gap-2">
                    <Skeleton className="h-3 w-3/5 rounded-lg"/>
                    <Skeleton className="h-3 w-4/5 rounded-lg"/>
                </div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return <SignInButton />
    }

    return (
         <div className="max-w-[300px] w-full flex items-center gap-3 py-2">
                <div>
                    <ProfilePic />
                </div>
                <div className="w-full flex flex-col gap-1">

                    {user?.family_name && user?.given_name ? <p className="text-sm font-semibold">{user?.given_name}{user?.family_name}</p> : null}
                    
                    <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
            </div>
    )
}

export function ProfilePic() {
    const {
        isLoading,
        user,
        isAuthenticated
    } = useKindeBrowserClient();

    if (isLoading) {
        return (
            <div className="max-w-[300px] w-full flex items-center gap-3">
                <div>
                    <Skeleton className="flex rounded-full w-12 h-12"/>
                </div>
            </div>
        )
    }

    if (!isAuthenticated) {
        return null
    }

    return (
    <Avatar>
        <AvatarImage src={user?.picture || `https://api.dicebear.com/7.x/rings/svg?seed=${user?.email}`} />
        <AvatarFallback></AvatarFallback>
    </Avatar>
    )
}