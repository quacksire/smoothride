import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import Image from "next/image";
import PostFeed from "@/components/post-feed";
import { Suspense } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {

    // create three cards
  return (
    <main className="flex h-screen flex-col items-center justify-between">
        <ScrollArea className="h-full w-max">
            <div className="gap-16 items-center pb-8 px-0 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-0">
                <PostFeed />
            </div>
        </ScrollArea>
    </main>
  );
}
