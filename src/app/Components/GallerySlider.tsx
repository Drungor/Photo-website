"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useLayoutEffect, useState, useEffect } from "react";

interface GalleryItem {
  id: number;
  title: string;
  src: string;
  mode: string;
}

interface GallerysliderProps {
  gallery: GalleryItem[]; // Prop gallery explicitement requise
  children: React.ReactNode;
}

const GallerySlider = ({ gallery, children }: GallerysliderProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(100);
  const [isMobile, setIsMobile] = useState(false);
  const gap = 48;
  const ratio = 0.1;

  //responsive detection
    useEffect(() => {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);
      return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

  useLayoutEffect(() => {
    if (isMobile) return; 

    const totalWidth = gallery.reduce((acc, item, index) => {
      const cardWidth = item.mode === "portrait" ? 416 : 1152;
      return acc + cardWidth + (index === gallery.length - 1 ? 0 : gap);
    }, 0);

    const adjustedWidth = totalWidth - window.innerWidth;

    const lastCardWidth = gallery[gallery.length - 1]?.mode === "portrait" ? 416 : 1152;
    setContainerWidth(adjustedWidth + lastCardWidth > 0 ? adjustedWidth + lastCardWidth : 0);

    const calculatedHeight = Math.ceil((adjustedWidth + window.innerWidth + lastCardWidth) * ratio);
    setSectionHeight(calculatedHeight > 100 ? calculatedHeight : 100); // Minimum 100vh
  }, [isMobile]);

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -containerWidth]);

  return (
    <section 
    ref={targetRef} 
    className={`relative ${isMobile ? "h-auto" : ""}`}
    style={isMobile ? {} : { height: `${sectionHeight}vh` }}
    >
       {isMobile ? (
        <div 
        className="flex flex-col gap-6 items-center "
        >
          {children}
        </div>
      ) : (
        <div className="sticky top-52 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 h-[70vh]">
            {children}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default GallerySlider;