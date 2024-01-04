import { AnimatePresence } from "framer-motion";
import GradientCircle from "./GradientCircle";
import { Tech } from "../types/tech";

export default function Techs({techs}: {techs: Tech[]}) {
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 content-start gap-12">
            <AnimatePresence>
                {techs.map((tech, index) => <a href={tech.link} target="_blank" key={index}><GradientCircle title={tech.title}><img src={tech.icon} alt={tech.title} className="md:max-h-16 md:max-w-16 transition-all duration-[400ms]"/><h4 className="absolute top-full my-2 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-[400ms] whitespace-nowrap group-hover:opacity-100 group-focus:opacity-100">{tech.title}</h4></GradientCircle></a>)}
            </AnimatePresence>
        </div>
    )
}