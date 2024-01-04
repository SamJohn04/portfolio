import React from "react";

export default function GradientBox({ children, index, focused, setFocused }: {children?: React.ReactNode | React.ReactNode[], index: number, focused: number, setFocused: React.Dispatch<React.SetStateAction<number>>}) {
    return (
        <div onClick={() => setFocused(val => index === val ? -1 : index)} className={"gradient-box cursor-pointer aspect-[16/7] relative flex flex-col justify-evenly items-center gap-2 p-4 rounded-md border-2 border-border transition-all duration-[400ms] shadow-lg hover:shadow-emphasis bg-background hover:text-text-bold active:text-text-bold hover:bg-primary active:bg-primary hover:scale-[1.1] active:scale-[1.05] hover:-translate-y-6 active:-translate-y-2" + (focused === index ? " focused" : '')}
            style = {focused === index ? {transform: 'translateY(-1.5rem)', scale: '1.05', backgroundColor: 'var(--primary)', color: 'var(--text-bold)'} : {}}
        >
            {children ?? ''}
        </div>
    )
}