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


    if (!(await isAuthenticated())) {
        return <NeedSignIn />
    }







}