'use client';
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Avatar from "./Avatar";
import React from "react";

export default function SelfIntro() {
    const titles = ['a Web Developer', 'a Mentor', 'an ML Enthusiast', 'a Student', 'a Web Developer'];
    
    const { scrollY } = useScroll();
    const [display, setDisplay] = React.useState(false);

    useMotionValueEvent(scrollY, "change", (y) => {
        setDisplay(y >= 900);
    })
    return (
        <div className="min-h-screen flex flex-col justify-start w-full relative overflow-x-hidden">
            <div className="h-screen py-16 flex flex-col gap-8 justify-start w-full">
                <h1 className="text-4xl md:text-6xl">Hello World! I'm <span className="gradient-text">Samuel John</span></h1>
                <h1 className="text-3xl md:text-5xl overflow-hidden h-16"><span>I'm </span><ul className="title-scroll inline-flex flex-col">{titles.map((title, i) => <li key={i} className="flex items-center justify-start h-16">{title}</li>)}</ul>
                </h1>
                <Avatar scrollY={scrollY}/>
            </div>
            <div className="md:h-screen md:py-16 flex flex-col gap-12 md:gap-60 w-full">
                <h2 className="text-4xl pt-4 md:text-6xl">About Me</h2>
                <motion.p style={display ? {display: 'flex'} : {}} initial={{opacity: 0}} whileInView={{opacity: 1}} className="flex text-balance leading-loose self-end md:hidden md:w-4/6 text-md md:text-xl md:self-end">
                    I am a Computer Science and Engineering student with a zest to learn, explore and create. The culmination of one's experience and knowledge results in the creation of something wonderfully unique. As a developer, I strive to achieve this with every project I work on. Additionally, I believe that knowledge is best shared and I share mine through training and mentoring.
                </motion.p>
            </div>
        </div>
    )
}

//<span key={i} className="title inline-flex transition-all duration-1000 whitespace-pre absolute overflow-hidden" style={{height: i === index ? '100%' : '0%', top: (i === index || (index + 1)%titles.length === i ) ? '0%':'100%', transform: i === index ? 'skew(0deg)' : 'skew(90deg)'}}> {title}</span>