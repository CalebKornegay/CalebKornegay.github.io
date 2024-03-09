"use client";

import React, { useEffect, useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Projects() {
    const { ref, inView } = useInView({
        threshold: 0.75,
    });
    const { setActiveSection, timeOfLastClick} = useActiveSectionContext();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Projects");
        }
    }, [inView, setActiveSection, timeOfLastClick]);

    const conref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: conref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0,1], [0.75, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0,1], [0.6, 1]);
  return (
    <section ref={ref} id="projects" className="scroll-mt-24 mb-28">
        <h2 className="text-center mb-8 text-3xl text-black font-medium capitalize">My Projects</h2>
        <div className="">
            {projectsData.map((item => (
                <React.Fragment key={item.title}>
                    <motion.div style={{
                        scale: scaleProgress,
                        opacity: opacityProgress,
                    }} className="group mb-3 sm:mb-8 last:mb-0">
                    <section ref={conref} 
                    className="relative bg-gray-100  sm:max-w-[36rem] xl:max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] group-even:pl-8 hover:bg-gray-200 transition mb-3 sm:mb-8 last:mb-0 rounded-lg flex">
                        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
                            <h3 className="text-2xl font-semibold">{item.title}</h3>
                            <p className="mt-2 leading-relaxed text-gray-700">{item.description}</p>
                            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                                {item.tags.map(((tag, index) => (
                                    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>{tag}</li>
                                )))}
                            </ul>
                        </div>
                        <Image src={item.imageUrl} alt={item.title} quality={95} className="absolute top-8 -right-40 max-w-[70%] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-[3.5rem] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 transition group-hover:scale-105"/>
                    </section></motion.div>
                </React.Fragment>
            )))}
        </div>
    </section>
  );
}
