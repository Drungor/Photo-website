'use client';

import { motion, useScroll, useSpring} from "motion/react";



const HorizontalScroll = () => {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  })


  return (
        

              <motion.div className="fixed bottom-20 left-40 w-1/5 h-2 origin-bottom-left rounded-md bg-primary opacity-80">
                <motion.div
                    className="fixed bottom-20 left-40 w-1/5 h-2 origin-bottom-left rounded-md bg-impact "
                    style={{ scaleX}}
                    >
                </motion.div>
              </motion.div>
  );
}

export default HorizontalScroll;

