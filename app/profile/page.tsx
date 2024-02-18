import { ProfilePic } from "@/components/kinde";
import NeedSignIn from "@/components/needsigninpage";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import Image from "next/image";

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
        
        <ProfilePic/>        
    )






}