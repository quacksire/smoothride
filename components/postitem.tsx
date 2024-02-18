'use client';

import { Post } from "@/lib/db";
import { ArrowBigUp, ArrowBigDown } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import { updatePost } from "@/lib/db";
import { Map, Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

export default function PostItem({ card} : { card: Post }) {

    const [upvoted, setUpvote] = useState(false);
    const [downvoted, setDownvote] = useState(false);

    // Split the string into an array of strings
    const coordinatesArray = card.agency?.split(",");
    const username = card.author?.split("@")[0];

    let lat: number = 0;
    let long: number = 0;

    // Parse each string into a number using parseFloat
    if (coordinatesArray) {
        const latitude = parseFloat(coordinatesArray[0]);
        const longitude = parseFloat(coordinatesArray[1]);
        lat = latitude;
        long = longitude;
    }
    return (
       <Card className="w-[700px] rounded-2xl">
                    <CardHeader>
                        <CardTitle>{card.title}</CardTitle>
                        <CardDescription>reported by {username}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                        {card.description}
                        </p>
                            <Map mapboxAccessToken="pk.eyJ1IjoiY2hpbGRxdWFjayIsImEiOiJjbHM2a2s2dXQwdmVzMmxxaHN0dXEzaGRsIn0.RVy7AMo3FChS0lsSkJcyPg"
                                mapStyle="mapbox://styles/mapbox/navigation-day-v1"
                                initialViewState={{latitude:lat, longitude:long, zoom: 12 }}
                                style={{ width: "100%", height: "300px" }}
                                >
                                {lat ? <Marker latitude={lat} longitude={long}/> : null}
                            </Map>
                    </CardContent>
                    <CardFooter className="flex justify-start">
                        <Button variant="ghost" onClick={async () => {
                            let newUpvote = !upvoted;
                            if (downvoted) {
                                setDownvote(false); 
                                card.voteCount += 1;
                            }
                            if (!card.voteCount) {
                                card.voteCount = 0;
                            }
                            card.voteCount = newUpvote ? card.voteCount + 1 : card.voteCount - 1;
                            await updatePost(card.id, card.voteCount);
                            console.log(newUpvote);
                            setUpvote(newUpvote);
                            }}>
                            {upvoted ? <ArrowBigUp color="#ff6000" fill="#ff6000"/> : <ArrowBigUp/>}
                        </Button>
                        <p>{card.voteCount ? card.voteCount : 0}</p>
                        <Button variant="ghost" onClick={async () => {
                            let newDownvote = !downvoted;
                            if (upvoted) {
                                setUpvote(false);
                                card.voteCount -= 1;
                            }
                            if (!card.voteCount) {
                                card.voteCount = 0;
                            }
                            card.voteCount = newDownvote ? card.voteCount - 1 : card.voteCount + 1;
                            await updatePost(card.id, card.voteCount);
                            console.log(newDownvote);
                            setDownvote(newDownvote);
                            }}>
                            {downvoted ? <ArrowBigDown color="#9494ff" fill="#9494ff"/> : <ArrowBigDown/>}
                        </Button>
                    </CardFooter>
                </Card>
    );
}