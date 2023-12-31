"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section id="about" className="mb-16 max-w-[45rem] text-center leading-8 sm:mb-28 scroll-mt-24"
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}>
        <h2 className="mb-8 text-3xl text-black font-medium capitalize">About Me</h2> 
        <p className="mb-3">{`Hi my name is Caleb`}</p>
        <p className="mb-3">{`More text, I'm bad at React lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao lmao`}</p>
    </motion.section>
  );
}
