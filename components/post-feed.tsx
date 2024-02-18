"use server";
import { getAllPosts } from "@/lib/db";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default async function PostFeed() {

    const posts = await getAllPosts();
    console.log(posts);
    
    return (
        <div className="grid grid-cols-1 gap-10">
            {posts.map((card, index) => (
                <Card className="w-[700px] rounded-2xl" key={index}>
                <CardHeader>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>reported by @{'cocklover69'}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                    {card.description}
                    </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Deploy</Button>
                </CardFooter>
                </Card>
            ))}
        </div>
    );
}
/*
{
    id: '586c68ac-95f6-49e2-b8ce-9b1d67fc7ebf',
    author: 'kp_aa7f3cbe42b54cf8bb6be32de3a0fe7c',
    type: 'NULL',
    title: '',
    description: '',
    image: null,
    created_at: '2024-02-18T03:02:56.898Z',
    agency: 'NULL'
  }
*/