"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Divider() {
  return (
    <motion.div className="bg-gray-200 my-16 h-24 w-1 rounded-full sm:h-48"
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{
            delay: 0.1,
        }}>
    </motion.div>
  );
}
