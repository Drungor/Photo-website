"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";
import imageData from "../data/project.js";

interface HorizontalSlidderProps {
  children: React.ReactNode;
  className?: string;
}

const HorizontalSlidder = ({ children }: HorizontalSlidderProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const gap = 48;

  useLayoutEffect(() => {
    const calculateDimensions = () => {
      const totalWidth = imageData.reduce((acc, item, index) => {
        const cardWidth = item.mode === "portrait" ? 416 : 1152;
        return acc + cardWidth + (index === imageData.length - 1 ? 0 : gap);
      }, 0);

      const adjustedWidth = totalWidth - window.innerWidth;
      const lastCardWidth =
        imageData[imageData.length - 1]?.mode === "portrait" ? 416 : 1152;

      setContainerWidth(
        adjustedWidth + lastCardWidth > 0 ? adjustedWidth + lastCardWidth : 0
      );

      const calculatedHeight =
        (adjustedWidth + window.innerWidth + lastCardWidth) * 0.1; // Ratio hauteur/largeur
      setSectionHeight(calculatedHeight > 100 ? calculatedHeight : 100);
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);

    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -containerWidth]);

  return (
    <section
      ref={targetRef}
      className="relative flex flex-col md:h-[100vh]"
      style={{ height: `${sectionHeight}vh`, minHeight: '100vh' }}
    >
      <div className="sticky top-52 overflow-hidden hidden md:flex">
        <motion.div
          style={{ x }}
          className="flex gap-12 h-[70vh] will-change-transform"
        >
          {children}
        </motion.div>
      </div>
      <div  className="flex flex-col gap-6 items-center h-auto md:hidden" style={{ paddingBottom: '2rem' }}>
        {children}
      </div>
    </section>
  );
};

export default HorizontalSlidder;