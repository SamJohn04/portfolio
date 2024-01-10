import { Close, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { RefObject } from "react";

export default function Navigation({ screens }: {screens: {title: string, ref: RefObject<HTMLDivElement>}[]}) {
    const [open, setOpen] = React.useState(false);

    const handleNavClick = (screen: {title: string, ref: RefObject<HTMLDivElement>}) => {
        screen.ref.current?.scrollIntoView({behavior: 'smooth'});
        setOpen(false);
    };

    return (
        <nav className="fixed shadow top-0 left-0 w-screen bg-primary md:bg-background z-20">
            <IconButton className="md:hidden text-text" onClick={() => setOpen(val => !val)}>{open ? <Close /> : <Menu />}</IconButton>
            <ul style={open ? {display: 'flex'} : {}} className="w-full hidden md:flex flex-col md:flex-row justify-around items-center">
                {screens.map((screen, index) => <button key={index} className="w-full" onClick={() => handleNavClick(screen)}><li className="w-full py-4 md:p-4 text-center transition-all duration-300 nav-item">{screen.title}</li></button>)}
            </ul>
        </nav>
    )
}