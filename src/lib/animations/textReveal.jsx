'use client'
import React from 'react'
import { motion } from "framer-motion"

const TextReveal = ({ children, delay = 0 }) => {
    const textVariants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                delay: delay,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            variants={textVariants}
            initial="offscreen"
            animate="onscreen"
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

export default TextReveal