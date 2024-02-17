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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function CreateIssue() {
  return (
    <main className="flex w-[75vw] h-[60vw] flex-col items-center justify-between z-10">
        {/* a form that allows the user to create a new issue with params such as title, description, and an option image upload */}
        <Card className="rounded-2xl w-[50vw]">
            <CardHeader>
                <CardTitle>Create a new issue</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col space-y-4">
                    <Input type="text" placeholder="Title" className="p-2" />
                    <Textarea placeholder="Description" className="p-2" />
                    <Input className="" type="file" accept="image/*"/>
                </div>
            </CardContent>
            <CardFooter>
                <Button>Create</Button>
            </CardFooter>
        </Card>
    </main>
  );
}
