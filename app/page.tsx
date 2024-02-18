import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Sidebar } from "@/components/sidebar";
import Image from "next/image";

export default function Home() {

    // create three cards
    const cards = [
        {
            title: "Card 1",
            description: "This is the first card",
            user: "diskutility"
        },
        {
            title: "Card 2",
            description: "This is the second card",
            user: "quacksire"
        },
        {
            title: "Card 3",
            description: "This is the third card",
            user: "rhine"
        }
    ]

  return (
    <main className="flex h-screen flex-col items-center justify-between">
        <div>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Top Issues</h2>
            {/* add the cards */}
            <div className="grid grid-cols-1 gap-10">
                {cards.map((card, index) => (
                    <Card className="w-[700px] rounded-2xl" key={index}>
                    <CardHeader>
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription>reported by @{card.user}</CardDescription>
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
        </div>
    </main>
  );
}
