'use client';
import { Code, Construction, Psychology, Storage } from "@mui/icons-material"
import GradientBox from "./GradientBox"
import Techs from "./Techs";
import { Tech } from "../types/tech";
import React from "react";

export default function SkillBoxes() {
    const skills = [{
        title: 'FrontEnd Development',
        icon: Code,
    }, {
        title: 'BackEnd Development',
        icon: Storage
    }, {
        title: 'Command Line Tools',
        icon: Construction
    }, {
        title: 'Artificial Intelligence',
        icon: Psychology
    }]

    const techs: Tech[] = [{
        title: "HTML5",
        icon: 'tech-logos/html5.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
        skills: [0]
      }, {
        title: "CSS3",
        icon: 'tech-logos/css3.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        skills: [0]
      }, {
        title: "JavaScript",
        icon: 'tech-logos/javascript.png',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        skills: [0]
      }, {
        title: "TypeScript",
        icon: "tech-logos/typescript.svg",
        link: 'https://www.typescriptlang.org/',
        skills: [0]
      }, {
        title: 'React',
        icon: 'tech-logos/react-logo.svg',
        link: 'https://reactjs.org/',
        skills: [0]
      }, {
        title: 'NextJS',
        icon: 'tech-logos/nextjs.png',
        link: 'https://nextjs.org/',
        skills: [0, 1]
      }, {
        title: 'TailwindCSS',
        icon: 'tech-logos/tailwind.svg',
        link: 'https://tailwindcss.com/',
        skills: [0]
      }, {
        title: 'Redux Toolkit',
        icon: 'tech-logos/redux.svg',
        link: 'https://redux-toolkit.js.org/',
        skills: [0]
      }, {
        title: 'NodeJS',
        icon: 'tech-logos/nodejs.svg',
        link: 'https://nodejs.org/en/',
        skills: [1]
      }, {
        title: 'ExpressJS',
        icon: 'tech-logos/express.png',
        link: 'https://expressjs.com/',
        skills: [1]
      }, {
        title: 'Java Spring',
        icon: 'tech-logos/spring.svg',
        link: 'https://spring.io/',
        skills: [1]
      }, {
        title: 'Firebase',
        icon: 'tech-logos/firebase.svg',
        link: 'https://firebase.google.com/',
        skills: [1]
      }, {
        title: 'MongoDB',
        icon: 'tech-logos/mongodb.svg',
        link: 'https://www.mongodb.com/',
        skills: [1]
      }, {
        title: 'MySQL',
        icon: 'tech-logos/mysql.png',
        link: 'https://www.mysql.com/',
        skills: [1]
      }, {
        title: 'PostgreSQL',
        icon: 'tech-logos/postgresql.png',
        link: 'https://www.postgresql.org/',
        skills: [1]
      }, {
        title: 'Git',
        icon: 'tech-logos/git.png',
        link: 'https://git-scm.com/',
        skills: []
      }, {
        title: 'Python',
        icon: 'tech-logos/python.svg',
        link: 'https://www.python.org/',
        skills: [2, 3]
      }, {
        title: 'C',
        icon: 'tech-logos/c.png',
        link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
        skills: [2]
      }, {
        title: 'Tensorflow',
        icon: 'tech-logos/tensorflow.svg',
        link: 'https://www.tensorflow.org/',
        skills: [3]
      }, {
        title: 'Keras',
        icon: 'tech-logos/keras.svg',
        link: 'https://keras.io/',
        skills: [3]
      }]

    const [focused, setFocused] = React.useState(-1)
    return (
        <div className="w-full flex flex-col gap-16">
          <h2 className="text-4xl md:text-6xl">Skills</h2>
          <div className="min-h-screen py-4 flex flex-col gap-16 items-center">
            <div className="w-full grid grid-cols-2 md:grid-cols-4 text-center gap-8">
                {skills.map((skill, index) => <GradientBox key={index} index={index} focused={focused} setFocused={setFocused}><skill.icon className="h-16 w-16"/><h4>{skill.title}</h4></GradientBox>)}
            </div>
            <Techs techs={techs.filter(value => focused === -1 || value.skills?.includes(focused))}/>
          </div>
        </div>
    )
}