import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import Image from "next/image";
import NewPostFeed from "@/components/post-feed";
import { Suspense } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {

    // create three cards
  return (
    <main className="flex h-screen flex-col items-center justify-between">
        <ScrollArea className="h-full w-max">
          
              <NewPostFeed />
            
        </ScrollArea>
    </main>
  );
}
