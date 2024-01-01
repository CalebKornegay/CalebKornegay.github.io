"use client";

import React, { useEffect } from 'react';
import { skillsData } from '@/lib/data';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';

export default function Skills() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick} = useActiveSectionContext();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Skills");
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    
  return (
    <section ref={ref} id="skills" className="max-w-[53rem] scroll-mt-28 text-center mb-28">
        <h2 className="text-center mb-8 text-3xl text-black font-medium capitalize">My Skills</h2>
        <ul className="flex flex-wrap justify-center text-lg gap-2 rounded-lg text-gray-800">
            {skillsData.map((skill, index) => (
                <motion.li className="bg-white border border-black/[0.1] rounded-xl px-5 py-3" 
                initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    delay: index/18,
                }}
                viewport={{once: true}}
                key={index}>{skill}</motion.li>
            ))}
        </ul>
    </section>
  )
}
