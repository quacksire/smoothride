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
        
        <div className="w-[1000px] text-gray-500 sm:text-lg dark:text-gray-400 flex justify-center items-center">
                    

                    <div>

			<div className="w-full flex  p-10 items-center justify-center"></div>
				<div className="flex items-center p-4">
					<div className="relative flex flex-col items-center w-full">
						<div
							className="h-24 w-24 md rounded-full relative avatar flex items-end justify-end text-purple-600 bg-white min-w-max absolute -top-16 flex text-purple-100 row-start-1 row-end-3 text-purple-650 ring-1 ring-white">
							<ProfilePic/>
							<div className="absolute"></div>
						</div>
						<div className="flex flex-col space-y-1 justify-center items-center -mt-12 w-full">
							<span className="text-md whitespace-nowrap text-gray-800 font-semibold text-4xl">{user.email}</span>
							<p className="text-xl text-gray-500">
								description here
							</p>
							<div
								className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid text-2xl">
								<span className="text-center px-2"><span className="font-bold text-gray-700">27</span><span className="text-gray-600"> issues</span></span>
							</div>
						</div>
					</div>
				</div>
			</div>
                </div>       
    )






}