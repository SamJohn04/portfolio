'use client';

import { Email, GitHub, LinkedIn } from "@mui/icons-material"
import React from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Avatar() {
    const myLinks = [{
        title: 'GitHub',
        link: 'https://github.com/SamJohn04',
        icon: GitHub
    }, {
        title: 'Email',
        link: 'mailto:samuel.john.codes@gmail.com',
        icon: Email
    }, {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/samuel-john-329b08246/',
        icon: LinkedIn 
    }]

    const [open, setOpen] = React.useState(false);
    const avatar = React.useRef<HTMLDivElement>(null);

    // const [rightCornerVal, setRightCornerVal] = React.useState(0);
    // const [topCornerVal, setTopCornerVal] = React.useState(100);

    // const [avatarSize, setAvatarSize] = React.useState('vw' as 'vw' | 'vh') 

    // React.useEffect(() => {
    //     setAvatarSize(window.innerHeight > window.innerWidth ? 'vw' : 'vh');
    // }, [])

    // useMotionValueEvent(scrollY, "change", (y) => {
    //     console.log(window.innerWidth)
    //     setRightCornerVal(Math.min(1000  * window.innerWidth / 1848, y));
    //     setTopCornerVal(Math.min(850 * window.innerHeight / 933, y+100 ));
    // })

    const [floatOpen, setFloatOpen] = React.useState(false);

    const { scrollY, scrollYProgress } = useScroll({target: avatar,});

    useMotionValueEvent(scrollY, "change", y => {
        if (scrollYProgress.get() === 0) {
            setFloatOpen(true);
        } else {
            setFloatOpen(false);
        }
    })

    return (
        <>
            {/* <motion.div className="hidden lg:block absolute translate-y-3/4 -translate-x-1/2" style={{right: rightCornerVal, top: topCornerVal}}>
                <img onClick={() => setOpen(val => !val)} src="avatar.svg" alt="Samuel John" style={{maxHeight: `40${avatarSize}`, maxWidth: `40${avatarSize}`}} className="relative rounded-full z-10 mx-auto object-cover hover:scale-95 active:scale-95 transition-all cursor-pointer"/>
                <AnimatePresence>{open ? <div>
                    {myLinks.map((link, index) => <motion.div key={index} initial={{top: "50%", transform: 'translate(0, 0)'}} exit={{top: "50%", transform: 'translate(0, 0)'}} animate={{transform: `translate(${(index-1)*5}rem, ${Math.abs(index-1)*1.3}rem)`, top: '-4rem'}} className="absolute avatar-link"><a href={link.link} target="_blank"><link.icon className="absolute min-w-12 min-h-12 bg-secondary hover:bg-secondary-bold active:bg-secondary-bold rounded-full hover:scale-125 active:scale-125 transition duration-300 p-2" fontSize="large"/></a></motion.div>)}
                </div> : ''}</AnimatePresence>
            </motion.div> */}
            <div ref={avatar} className="lg:|hidden relative md:self-end justify-self-end" >
                <img onClick={() => setOpen(val => !val)} src="avatar.svg" alt="Samuel John" className="relative rounded-full h-[16rem] w-[16rem] md:h-[25rem] md:w-[25rem] z-10 mx-auto object-cover hover:scale-95 active:scale-95 transition-all cursor-pointer"/>
                <AnimatePresence>{open ? <div>
                    {myLinks.map((link, index) => <motion.div key={index} initial={{top: "50%", transform: 'translate(0, 0)'}} exit={{top: "50%", transform: 'translate(0, 0)'}} animate={{transform: `translate(${(index-1)*5}rem, ${Math.abs(index-1)*1.3}rem)`, top: '-4rem'}} className="absolute avatar-link"><a href={link.link} target="_blank"><link.icon className="absolute min-w-12 min-h-12 bg-secondary hover:bg-secondary-bold active:bg-secondary-bold rounded-full hover:scale-125 active:scale-125 transition duration-300 p-2" fontSize="large"/></a></motion.div>)}
                </div> : ''}</AnimatePresence>
            </div>
            <div className={`fixed bottom-10 right-10 z-50 transition-all ${floatOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                <img onClick={() => setOpen(val => !val)} src="avatar.svg" alt="Samuel John" className='rounded-full h-[5rem] w-[5rem] md:h-[8rem] md:w-[8rem] z-10 mx-auto object-cover hover:scale-95 active:scale-95 transition-all cursor-pointer'/>
                <AnimatePresence>
                    {open ?
                    <div>
                        {myLinks.map((link, index) => <motion.div key={index} initial={{top: "50%", transform: 'translate(0, 0)'}} exit={{top: "50%", transform: 'translate(0, 0)'}} animate={{transform: `translate(${(index-1)*3}rem, ${Math.abs(index-1)*1.3}rem)`, top: '-4rem'}} className="absolute avatar-link"><a href={link.link} target="_blank"><link.icon className="absolute min-w-12 min-h-12 bg-secondary hover:bg-secondary-bold active:bg-secondary-bold rounded-full hover:scale-125 active:scale-125 transition duration-300 p-2" fontSize="large"/></a></motion.div>)}
                    </div> : ''}
                </AnimatePresence>
            </div>
        </>
    )
}