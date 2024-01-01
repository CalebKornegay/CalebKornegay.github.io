"use client";

import { useActiveSectionContext } from '@/context/active-section-context';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';

export default function Experience() {
    const { ref, inView } = useInView({
        threshold: 0.80,
    });
    const { setActiveSection, timeOfLastClick} = useActiveSectionContext();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Experience");
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28">
        <h2 className="text-center mb-8 text-3xl text-black font-medium capitalize">Experience</h2>
        <VerticalTimeline lineColor="#e5e7eb">
            {experiencesData.map((experience, index) => (
                <VerticalTimelineElement visible={true} 
                contentStyle={{
                    background: "#f3f4f6",
                    boxShadow: "none",
                    border: "1px solid rgba(0, 0, 0, 0.05)", 
                    textAlign: "left",
                    padding: "1.3rem 2rem",
                }} 
                contentArrowStyle={{
                    borderRight: "0.4rem solid #9ca3af"
                }}
                icon={experience.icon} 
                iconStyle={{
                    background: "white",
                    fontSize: "1.5rem",
                }}
                date={experience.date} key={index}>
                    <h3 className="font-semibold capitalize">{experience.title}</h3>
                    <p className="font-normal !mt-0">{experience.location}</p>
                    <p className="!mt-1 !font-normal text-gray-700">{experience.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    </section>
  )
}
