'use client';
import { Close, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

export default function Navigation() {
    const [open, setOpen] = React.useState(false);
    const screens = [{
        title: 'Home'
    }, {
        title: 'About'
    }, {
        title: 'Skills'
    }, {
        title: 'Projects'
    }, {
        title: 'Contact'
    }];
    return (
        <nav className="fixed top-0 left-0 w-screen bg-secondary md:bg-background z-20">
            <IconButton className="md:hidden" onClick={() => setOpen(val => !val)}>{open ? <Close /> : <Menu />}</IconButton>
                <ul style={open ? {display: 'flex'} : {}} className="w-full hidden md:flex flex-col md:flex-row justify-around items-center">
                    {screens.map((screen, index) => <li key={index} className="w-full py-4 md:p-4 text-center hover:bg-primary active:bg-primary">{screen.title}</li>)}
                </ul>            
        </nav>
    )
}