"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

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
  const gap = 48;
  const ratio = 0.1;


  useLayoutEffect(() => {
    const totalWidth = gallery.reduce((acc, item, index) => {
      const cardWidth = item.mode === "portrait" ? 355 : 800;
      return acc + cardWidth + (index === gallery.length - 1 ? 0 : gap);
    }, 0);

    const adjustedWidth = totalWidth - window.innerWidth;

 
    const lastCardWidth = gallery[gallery.length - 1]?.mode === "portrait" ? 355 : 800;
    setContainerWidth(adjustedWidth + lastCardWidth > 0 ? adjustedWidth + lastCardWidth : 0);


    const calculatedHeight = Math.ceil((adjustedWidth + window.innerWidth + lastCardWidth) * ratio);
    setSectionHeight(calculatedHeight > 100 ? calculatedHeight : 100); // Minimum 100vh
  }, [gallery]);

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -containerWidth]);

  return (
    <section ref={targetRef} className="relative" style={{ height: `${sectionHeight}vh` }}>
      <div className="sticky top-52 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySlider;