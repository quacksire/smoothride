"use server";
import { getAllPosts } from "@/lib/db";
import PostItem from "./postitem";

export default async function PostFeed() {
    let posts = await getAllPosts();
    console.log(posts);

    // sort the posts by date, newest first
    posts = posts.sort((a, b) => {
        //@ts-ignore
        return new Date(Date.parse(b.created_at)).getTime() - new Date(Date.parse(a.created_at)).getTime();
    });
    return (
        <div className="grid grid-cols-1 gap-10 py-4">
            {posts.map((card, index) => (
                <PostItem key={index} card={card} />
            ))}
        </div>
    );
}
