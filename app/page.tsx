import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import Image from "next/image";
import PostFeed from "@/components/post-feed";
import { Suspense } from "react";

export default function Home() {

    // create three cards
  return (
    <main className="flex h-screen flex-col items-center justify-between">
        <Suspense fallback={<div>Loading...</div>}>
            <PostFeed />
        </Suspense>
        
    </main>
  );
}
