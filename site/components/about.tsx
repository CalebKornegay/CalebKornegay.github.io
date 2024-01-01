"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
    const { ref, inView } = useInView({
        threshold: 0.85,
    });
    const { setActiveSection, timeOfLastClick} = useActiveSectionContext();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("About");
        }
    }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section ref={ref} id="about" className="mb-16 max-w-[45rem] text-center leading-8 sm:mb-28 scroll-mt-24"
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}>
        <h2 className="mb-8 text-3xl text-black font-medium capitalize">About Me</h2> 
        <p className="mb-3">{`Hi my name is Caleb. I am a Computer Science bachelor pursuant at the University of Tennessee, Knoxville.`}</p>
        <p className="mb-3">{`This is my first step into the front-end development space. This is my first project with typescript, next.js, and tailwind.css`}</p>
    </motion.section>
  );
}
