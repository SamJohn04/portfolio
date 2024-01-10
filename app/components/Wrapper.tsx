'use client';
import React, { RefObject, useRef } from "react";
import Navigation from "./Navigation";
import SelfCard from "./SelfCard";
import { KeyboardArrowDown } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Wrapper({home, about, skillBoxes}: Record<string, React.JSX.Element>) {
    const screens: {title: string, ref: RefObject<HTMLDivElement>}[] = [{
        title: 'Home',
        ref: useRef<HTMLDivElement>(null)
    }, {
        title: 'About',
        ref: useRef<HTMLDivElement>(null)
    }, {
        title: 'Skills',
        ref: useRef<HTMLDivElement>(null)
    // }, {
    //     title: 'Projects'
    // }, {
    //     title: 'Contact'
    }];

    return (
        <>
            <div className="absolute flex items-center justify-center top-0 left-0 z-30 h-screen w-screen bg-[black]">
                <SelfCard/>
                <motion.div whileHover={{scale: 1.1}} className="absolute bottom-10 flex items-center transition" onClick={() => screens[0].ref.current?.scrollIntoView({behavior: 'smooth'})}><KeyboardArrowDown />Continue</motion.div>
            </div>
            <div className="h-screen">
            </div>
            <div className="flex flex-col gap-16 md:gap-64">
                <Navigation screens={screens}/>
                <div className="w-full" ref={screens.find(val => val.title === 'Home')?.ref}>
                    {home}
                </div>
                <div className="w-full" ref={screens.find(val => val.title === 'About')?.ref}>
                    {about}
                </div>
                <div className="w-full" ref={screens.find(val => val.title === 'Skills')?.ref}>
                    {skillBoxes}
                </div>
                <div className="w-full flex justify-center items-center">

                </div>
            </div>
        </>
    )
}