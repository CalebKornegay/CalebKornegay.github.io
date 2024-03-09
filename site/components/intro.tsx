"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import burnoutImg from '@/public/burnout.png';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { TbFileDownload } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick} = useActiveSectionContext();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Home");
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    
  return (
    <section ref={ref} id="home" className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0">
        <div className="flex items-center justify-center">
            <div className="relative">
                <motion.div
                    initial={{opacity: 0, scale: 0 }}
                    animate={{opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.3,
                    }}
                >
                    <Image src={burnoutImg} alt="burnout" quality="95" priority={true}
                    className="h-51 w-52 rounded-full object-cover border-[0.35rem] border-white shadow-xl sm:w-40 sm:h-39"/>
                </motion.div>
                <motion.span className="absolute bottom-0 right-0 text-4xl"
                    initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        type: "spring",
                        stiffness: 125,
                        delay: 0.1,
                        duration: 0.7,
                    }}>
                    🏎</motion.span>
            </div>
        </div>

        <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}>
            {`Hello, I'm Caleb, an aspiring software engineer from Knoxville Tennessee.`}
        </motion.h1>

        <motion.div className="flex flex-row justify-center gap-3 px-4 text-lg font-medium"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
            delay: 0.1,
        }}>
            {/* <Link className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105 transition" href="#contact">Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition"/> </Link> */}

            <a className="group bg-white p-4 flex items-center rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10" href="/Resume.docx" download><TbFileDownload className="group-hover:translate-y-1 transition"/> </a>

            <a className="bg-white p-4 text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer hover:text-gray-950 border border-black/10" href="https://www.linkedin.com/in/caleb-kornegay-77923818a/" target="_blank"><FaLinkedin /></a>

            <a className="bg-white p-4 text-gray-700 flex items-center rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition cursor-pointer border border-black/10" href="https://github.com/CalebKornegay" target="_blank"><FaGithub /></a>
        </motion.div>
    </section>
  );
}
