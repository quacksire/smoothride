import { getPost } from "@/lib/db";
import { Suspense } from "react";


export default async function PostView({ params }: { params: { id: string } }) {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {JSON.stringify(await getPost(params.id))}
            </Suspense>
        </div>
    );


};