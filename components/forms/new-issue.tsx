'use client'
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { SignInButton } from "@/components/kinde";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid'
import { useMediaQuery } from "@/lib/mediahook"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { createPost } from "@/lib/db";
import { useToast } from "../ui/use-toast";
import { Map, Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

type PostType = {
    id: string;
    author: string;
    type: string;
    title: string;
    description: string;
    image?: string;
    created_at: string;
    agency: string;
}


const Post = z.object({
    author: z.string(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
})


export default function LoggingForm({ children }: { children?: React.ReactNode }) {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const {
        user,
        isAuthenticated,
        isLoading
    } = useKindeBrowserClient();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const Form = () => {
        const [titleError, setTitleError] = useState("")
        const [descriptionError, setDescriptionError] = useState("")
        const [isSubmitting, setIsSubmitting] = useState(false)

        const [latLng, setlatLng] = useState<null | { lat: number, lng: number}>(null);

        const router = useRouter()
        const toast = useToast()

        return (
            <>
                {isAuthenticated && user ? (
                    <>
                        <form className="space-y-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="title" className="text-right">
                                    Title
                                </Label>
                                <Input {...register("title")} id="title" placeholder="What's the issue?" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="description" className="text-right">
                                    Description
                                </Label>
                                <Textarea {...register("description")} id="description" placeholder="Can you provide some more detail please?" className="col-span-3" />
                            </div>
                            <div className="w-full h-[300px] space-y-2 flex flex-col">
                                <Label htmlFor="description" className="text-left">
                                    Add a location
                                </Label>
                                <Map onClick={(e) => {
                                    console.log(e)

                                    setlatLng(e.lngLat)
                                    // latitude = e.lngLat.lat
                                    // longitude = e.lngLat.lng
                                }} mapboxAccessToken="pk.eyJ1IjoiY2hpbGRxdWFjayIsImEiOiJjbHM2a2s2dXQwdmVzMmxxaHN0dXEzaGRsIn0.RVy7AMo3FChS0lsSkJcyPg"
                                mapStyle="mapbox://styles/mapbox/navigation-day-v1"
                                initialViewState={{latitude:37.41079, longitude:-122.03106, zoom: 12 }}
                                style={{ width: "100%", height: "300px" }}
                                >
                                
                                {latLng ? <Marker latitude={latLng.lat} longitude={latLng.lng}/> : null}

                                </Map>
                            </div>
                            {/* @ts-ignore */}
                            <Button onClick={handleSubmit((data) => {
                                setIsSubmitting(true)

                                console.log(data)

                                let date = new Date()

                                let log = Post.safeParse({
                                    title: data.title,
                                    description: data.description,
                                    author: user?.id,
                                })
                                if (!log.success) {
                                    log.error.issues.forEach((issue: { path: any[]; message: React.SetStateAction<string>; }) => {
                                        issue.path.forEach((path: any) => {
                                            switch (path) {
                                                case "title":
                                                    setTitleError(issue.message)
                                                    break
                                                case "desciption":
                                                    setDescriptionError(issue.message)
                                                    break
                                            }
                                        })
                                    })
                                } else {
                                    setDescriptionError("")
                                    setTitleError("")
                                    setIsSubmitting(true)
                                    let uuid = uuidv4()
                                    createPost({
                                        id: uuid,
                                        title: data.title,
                                        voteCount: 0,
                                        author: user.email ? user.email : "anonymous",
                                        description: data.description,
                                        image: data.image,
                                        agency: latLng ? `${latLng.lat},${latLng.lng}` : null,
                                    }).then(r => {
                                        console.log(r)
                                        setIsSubmitting(false)
                                        toast.toast({ title: "Issue created", description: "Your issue has been created!" })
                                        setOpen(false)
                                        setTimeout(() => {
                                            router.refresh()
                                        }, 1000)
                                    })
                                }
                                console.log(log)
                            })}
                                disabled={isSubmitting}
                                className={'mt-3 mb-3 w-full'}
                            >
                                {isSubmitting ? "Submitting..." : "Create Issue"}
                            </Button>
                        </form>
                    </>
                ) : (
                    <div className="text-center">
                        You need to be signed in to create a new issue
                        <SignInButton className="w-full mx-3 mt-5" />
                    </div>
                )}
            </>
        )
    }




    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>New Issue</DialogTitle>
                    </DialogHeader>
                    <Form />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                {children}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>New Issue</DrawerTitle>
                </DrawerHeader>
                <div className="p-5">
                    <Form />
                </div>
            </DrawerContent>
        </Drawer>
    )

}
