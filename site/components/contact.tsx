"use client";

import { useActiveSectionContext } from '@/context/active-section-context';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick} = useActiveSectionContext();
    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Experience");
        }
    }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <section ref={ref} id="contact">
        <h2 className="text-center mb-8 text-3xl text-black font-medium capitalize">Contact Me</h2>
    </section>
  );
}
