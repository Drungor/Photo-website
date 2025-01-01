"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  src: string;
  mode: string;
}

interface GallerySliderProps {
  gallery: GalleryItem[];
  children: React.ReactNode;
}

const GallerySlider = ({ gallery, children }: GallerySliderProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const gap = 48;

  useLayoutEffect(() => {
    const calculateDimensions = () => {
      const totalWidth = gallery.reduce((acc, item, index) => {
        const cardWidth = item.mode === "portrait" ? 416 : 1152;
        return acc + cardWidth + (index === gallery.length - 1 ? 0 : gap);
      }, 0);

      const adjustedWidth = totalWidth - window.innerWidth;
      const lastCardWidth =
        gallery[gallery.length - 1]?.mode === "portrait" ? 416 : 1152;

      setContainerWidth(
        adjustedWidth + lastCardWidth > 0 ? adjustedWidth + lastCardWidth : 0
      );

      const calculatedHeight =
        (adjustedWidth + window.innerWidth + lastCardWidth) * 0.1;
      setSectionHeight(calculatedHeight > 100 ? calculatedHeight : 100); 
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);

    return () => window.removeEventListener("resize", calculateDimensions);
  }, [gallery]);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -containerWidth]);

  return (
    <>
      <section
        ref={targetRef}
        className="relative flex-col md:h-[100vh] hidden md:flex"
        style={{ height: `${sectionHeight}vh` }}
        >
        <div className="sticky top-52 overflow-hidden hidden md:flex">
          <motion.div
            style={{ x }}
            className="flex gap-12 h-[70vh] will-change-transform"
            >
            {children}
          </motion.div>
        </div>
      </section>
        <section>
          <div className="flex flex-col gap-6 items-center h-auto md:hidden">
            {children}
          </div>
        </section>
    </>
  );
};

export default GallerySlider;