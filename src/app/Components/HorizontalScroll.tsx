'use client';

import { motion, useScroll,useSpring } from "motion/react";


const HorizontalScroll = () => {
    const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-40 h-2 rounded-md bg-primary opacity-50">
      {/* Barre de progression */}
        <motion.div
            className="absolute h-full bg-impact opacity-100 rounded-md origin-left"
            style={{ scaleX }}
        >
        </motion.div>
    </div>
  );
}

export default HorizontalScroll;