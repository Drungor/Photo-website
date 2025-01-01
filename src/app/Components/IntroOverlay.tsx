"use client";
import { easeInOut } from "motion";
import { motion, AnimatePresence } from "motion/react";
import {useState, useEffect} from "react";



interface IntroOverlayProps {
    whileTap?: {scale:number};
}

const IntroOverlay = ({ whileTap }: IntroOverlayProps) => {
  const [isFirstVisit, setIsFirstVisit] = useState(() => {
    const hasVisited = localStorage.getItem("isFirstVisit");
    return !hasVisited; // if hasVisited is null, return true
  });

  useEffect(() => {
    if (isFirstVisit) {
      localStorage.setItem("isFirstVisit", "true");
    }
  }, [isFirstVisit]);

  const handleClick = () => {
    setIsFirstVisit(false);
    console.log("clicked");
  };

  return (
    <AnimatePresence>
        { isFirstVisit && ( 
        <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1, ease: easeInOut }
        }}
        className=" hidden md:block z-50 bg-background fixed top-0 left-0 w-full h-full">
        <div className="justify-center items-center flex h-full flex-col">
            <div className="intro-overlay__line"></div>
            <p className="text-2xl m-2 font-medium text-impact ">下にスクロールしたら、写真を見られる。</p>
            <motion.button
                whileTap={whileTap || { scale: 0.93 }}
                onClick={handleClick}
                className=" text-2xl mt-4 px-6 py-2  text-impact font-semibold hover:text-secondary tracking-widest  border border-impact rounded-full hover:border-secondary">
                発表する
            </motion.button>
            <div className="intro-overlay__line"></div>
        </div>
        </motion.div>
         )}
    </AnimatePresence>
  );
};

export default IntroOverlay;