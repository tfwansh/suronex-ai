"use client"
 
import * as React from 'react';
import { motion, useInView } from 'framer-motion';
 
export function TypingEffect({ text , className  }: { text: string, className?: string}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {once:true});
  return (
    <h2
      ref={ref}
      className={className}
    >
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={isInView ? { opacity: 1 } : {}}
          exit={{opacity:0}}
          transition={{ duration: 0, delay: index * 0.01 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}
