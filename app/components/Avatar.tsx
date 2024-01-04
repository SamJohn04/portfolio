'use client';

import { Email, GitHub, LinkedIn } from "@mui/icons-material"
import React from "react";
import { AnimatePresence, MotionValue, motion, useMotionValueEvent } from "framer-motion";

export default function Avatar({scrollY}: {scrollY: MotionValue<number>}) {
    const myLinks = [{
        title: 'GitHub',
        link: 'https://github.com/SamJohn04',
        icon: GitHub
    }, {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/samuel-john-329b08246/',
        icon: LinkedIn 
    }, {
        title: 'Email',
        link: 'mailto:samuel.john.codes@gmail.com',
        icon: Email
    }]

    const [open, setOpen] = React.useState(false);

    const [rightCornerVal, setRightCornerVal] = React.useState(-100);
    const [topCornerVal, setTopCornerVal] = React.useState(100);


    useMotionValueEvent(scrollY, "change", (y) => {
        setRightCornerVal(Math.min(900, y-100) * window.innerWidth / 1848);
        setTopCornerVal(Math.min(900, y+100));
    })

    return (
        <>
            <motion.div className="hidden md:block absolute translate-y-3/4 -translate-x-1/2" style={{right: rightCornerVal, top: topCornerVal}}>
                <img onClick={() => setOpen(val => !val)} src="avatar.svg" alt="Samuel John" className="relative rounded-full max-h-[35rem] w-2/3 max-w-[35rem] z-10 mx-auto object-cover hover:scale-95 active:scale-95 transition-all cursor-pointer"/>
                <AnimatePresence>{open ? <div>
                    {myLinks.map((link, index) => <motion.div key={index} initial={{top: "50%", transform: 'translate(0, 0)'}} exit={{top: "50%", transform: 'translate(0, 0)'}} animate={{transform: `translate(${(index-1)*5}rem, ${Math.abs(index-1)*1.3}rem)`, top: '-4rem'}} className="absolute avatar-link"><a href={link.link} target="_blank"><link.icon className="absolute min-w-12 min-h-12 bg-secondary hover:bg-secondary-bold active:bg-secondary-bold rounded-full hover:scale-125 active:scale-125 transition duration-300 p-2" fontSize="large"/></a></motion.div>)}
                </div> : ''}</AnimatePresence>
            </motion.div>
            <div className="md:hidden relative" style={{top: Math.min(topCornerVal, 200)}}>
                <img onClick={() => setOpen(val => !val)} src="avatar.svg" alt="Samuel John" className="relative rounded-full max-h-[35rem] w-2/3 max-w-[35rem] z-10 mx-auto object-cover hover:scale-95 active:scale-95 transition-all cursor-pointer"/>
                <AnimatePresence>{open ? <div>
                    {myLinks.map((link, index) => <motion.div key={index} initial={{top: "50%", transform: 'translate(0, 0)'}} exit={{top: "50%", transform: 'translate(0, 0)'}} animate={{transform: `translate(${(index-1)*5}rem, ${Math.abs(index-1)*1.3}rem)`, top: '-4rem'}} className="absolute avatar-link"><a href={link.link} target="_blank"><link.icon className="absolute min-w-12 min-h-12 bg-secondary hover:bg-secondary-bold active:bg-secondary-bold rounded-full hover:scale-125 active:scale-125 transition duration-300 p-2" fontSize="large"/></a></motion.div>)}
                </div> : ''}</AnimatePresence>
            </div>
        </>
    )
}