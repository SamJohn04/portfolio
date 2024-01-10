import Avatar from "./Avatar";
import React from "react";

export default function SelfIntro() {
    const titles = ['a Web Developer', 'a Mentor', 'an ML Enthusiast', 'a Student', 'a Web Developer'];
    
    // const { scrollY } = useScroll();
    // const [display, setDisplay] = React.useState(false);
    // const [gap, setGap] = React.useState(0);

    // useMotionValueEvent(scrollY, "change", (y) => {
    //     setDisplay(y >= 900 * window.innerHeight / 933);
    //     setGap(150 * window.innerHeight / 933);
    // })
    return (
        <div className="min-h-screen py-16 flex flex-col justify-between w-full">
            <div className="flex flex-col gap-8 justify-start w-full">
                <h1 className="text-4xl md:text-6xl">Hello World! I'm <span className="gradient-text">Samuel John</span></h1>
                <h1 className="text-3xl md:text-5xl overflow-hidden h-16"><span>I'm </span><ul className="title-scroll inline-flex flex-col">{titles.map((title, i) => <li key={i} className="flex items-center justify-start h-16">{title}</li>)}</ul>
                </h1>
            </div>
            <Avatar />
        </div>           
    )
}

//<span key={i} className="title inline-flex transition-all duration-1000 whitespace-pre absolute overflow-hidden" style={{height: i === index ? '100%' : '0%', top: (i === index || (index + 1)%titles.length === i ) ? '0%':'100%', transform: i === index ? 'skew(0deg)' : 'skew(90deg)'}}> {title}</span>