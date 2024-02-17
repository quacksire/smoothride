import { ProfilePic } from "@/components/kinde";
import NeedSignIn from "@/components/needsigninpage";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Home() {

    const {
        getUser,
        isAuthenticated
    } = getKindeServerSession();
    console.log(await getUser());
    console.log(await isAuthenticated());


   




    // create a detailed "Your Profile" page that shows the user's profile with their posts and "folllowers" and "following" counts, and their profile picture and email.
    // make it very detailed and show all the information about the user.
    // make it look like a profile page on a social media site.
    // you have access to the user's information from the getUser() function.
    // and you can use Tailwind CSS to style the page, and Shadn UI to make it look good.


    /**
     * Requirements:
        * Show the user's profile picture
        * Show the user's email
        * Show the user's posts
        * Show the user's followers
        * Show the user's following
        * Show the user's bio

        * Make it look good
        * Use Tailwind CSS
        * Use Shadn UI for the components and styles
     */

    // I want it look like twitter's profile page, even with the layout


     if (!(await isAuthenticated())) {
        return <NeedSignIn />
    }

    let user = await getUser();

    if (!user) {
        return <NeedSignIn />
    }


    return (
                <div className="text-gray-500 sm:text-lg dark:text-gray-400 flex justify-center items-center self-">
                    <div className="flex flex-col items-center">
                        <ProfilePic/>
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white justify-center">{user.email}</h2>
                        <div className="flex flex-row space-x-4">
                            <Link href="/profile/followers">
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">69</p>
                                    <p className="text-lg font-bold text-gray-500 dark:text-gray-400">Followers</p>
                            </Link>
                            <Link href="/profile/following">
                                    <p className="text-2xl font-bold text-gray-900 dark:text-white">42</p>
                                    <p className="text-lg font-bold text-gray-500 dark:text-gray-400">Following</p>
                            </Link>
                        </div>
                        <p className="text-lg font-bold text-gray-500 dark:text-gray-400">{"I'm a lil goofy"}</p>
                    </div>
                </div>
    )






}