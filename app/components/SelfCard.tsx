import React, { RefObject } from "react";

export default function SelfCard() {
    const [isFront, setIsFront] = React.useState(true);

    return (
        <div onClick={() => setIsFront(val => !val)} className="gilded-corners self-card w-[80vw] rotate-12 max-w-xl aspect-video bg-primary text-emphasis-opaque shadow-2xl transition duration-500 hover:scale-110 hover:rotate-0">
            <div style={{transform: `rotateY(${isFront ? '0deg' : '180deg'})`}} className="self-card absolute z-10 w-full h-full bg-primary flex justify-center items-center transition-all duration-300">
                <h1 className="text-2xl md:text-4xl">Samuel John</h1>
            </div>
            <div style={{transform: `rotateY(${isFront ? '-180deg' : '0deg'})`}} className="self-card-back absolute z-10 w-full h-full bg-primary flex justify-center items-center transition-all duration-300">
                <h1 className="text-2xl md:text-4xl">Hello World!</h1>
            </div>
            <div className="w-full h-full gradient-box relative z-20">
            </div>
        </div>
    )
}