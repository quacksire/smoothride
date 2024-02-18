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
          <Tabs defaultValue="top" className="w-[700px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="top">Top Posts</TabsTrigger>
              <TabsTrigger value="new">New Posts</TabsTrigger>
            </TabsList>
            <TabsContent value="top">
              this is what shows when u click top
            </TabsContent>
            <TabsContent value="new">
              <div className="gap-16 items-center pb-8 px-0 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pb-16 lg:px-0">
                  <NewPostFeed />
              </div>
            </TabsContent>
          </Tabs>
            
        </ScrollArea>
    </main>
  );
}
