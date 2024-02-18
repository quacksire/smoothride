'use client';

import { Post } from "@/lib/db";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { updatePost } from "@/lib/db";

export default function PostItem({ card} : { card: Post }) {

    const [upvoted, setUpvote] = useState(false);
    const [downvoted, setDownvote] = useState(false);

    return (
       <Card className="w-[700px] rounded-2xl">
                    <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>reported by @{'cocklover69'}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                        {card.description}
                        </p>
                    </CardContent>
                    <CardFooter className="flex justify-start">
                        <Button variant="ghost" onClick={() => {
                            let newUpvote = !upvoted;
                            if (downvoted) {
                                setDownvote(false); 
                            }
                            card.voteCount = newUpvote ? card.voteCount + 1 : card.voteCount - 1;
                            console.log(newUpvote);
                            setUpvote(newUpvote);
                            }}>
                            {upvoted ? <ArrowBigUp color="#ff6000" fill="#ff6000"/> : <ArrowBigUp/>}
                        </Button>
                        <p className="px-3">{card.voteCount}</p>
                        <Button variant="ghost" onClick={() => {
                            let newDownvote = !downvoted;
                            if (upvoted) {
                                setUpvote(false);
                            }
                            card.voteCount = newDownvote ? card.voteCount - 1 : card.voteCount + 1;
                            updatePost(card);
                            console.log(newDownvote);
                            setDownvote(newDownvote);
                            }}>
                            {downvoted ? <ArrowBigDown color="#9494ff" fill="#9494ff"/> : <ArrowBigDown/>}
                        </Button>
                    </CardFooter>
                </Card>
    );
}