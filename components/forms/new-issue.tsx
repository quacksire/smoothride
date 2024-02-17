'use client'
import {Form, useForm} from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useState } from "react"
import { Button } from "../ui/button";
export default function NewIssueForm({children} : {children: React.ReactNode}) {

    const [image, setImage] = useState('');

    return (
        <Dialog>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
            <DialogTitle>New Issue</DialogTitle>
            <DialogDescription>
                Create a new issue here.
            </DialogDescription>
            </DialogHeader>
            <Form className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                    Title
                    </Label>
                    <Input id="title" placeholder="What's the issue?" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                    Description
                    </Label>
                    <Textarea id="description" placeholder="Can you provide some more detail please?" className="col-span-3" />
                </div>
                <div className="flex flex-row w-full items-center justify-end space-x-4">
                    <Label htmlFor="description" className="text-right">
                        Upload Image
                    </Label>
                    <Input className="w-[335px]" type="file" value={image} onChange={e => setImage(e.target.value)} accept="image/*"/>
                </div>
            </Form>
            <DialogFooter>
                <Button type="button" onClick={() => {console.log(image)}}>Post issue</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>


        
    )
}