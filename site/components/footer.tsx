"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { contactData } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="z-[999] relative">
        <motion.div
        className="fixed left-1/2 bottom-1"
        initial={{opacity: 0, y: 100, x: "-50%"}}
        animate={{opacity: 1, y: 0, x: "-50%"}}>
            <ul className="flex flex-wrap justify-center items-center gap-2">
                {contactData.map((item, index) => (
                    <a href={item.link} target="_blank" key={index}
                    className="border border-black/10 p-[0.5rem] cursor-pointer bg-white rounded-full text-gray-700 outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:text-gray-950 transition">{item.icon}</a>
                ))}
            </ul>
        </motion.div>
    </footer>
  );
}
