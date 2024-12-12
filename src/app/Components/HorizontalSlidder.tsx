"use client";

import { motion, useTransform, useScroll } from 'motion/react';
import { useRef, useLayoutEffect, useState } from 'react';
import Card from '../Components/Card';
import imageData from '../data/project.js';


const HorizontalSlidder = () => {

  const targetRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(100);
  const gap = 48;
  const ratio = 0.1;

  // height and width of the section in fonction of number of cards displayed
  useLayoutEffect(() => {
    const totalWidth = imageData.reduce((acc, item, index) => {
      const cardWidth = item.mode === 'portrait' ? 355 : 800;
      return acc + cardWidth + (index === imageData.length - 1 ? 0 : gap); 
    }, 0);

    const adjustedWidth = totalWidth - window.innerWidth;

    // show last card fully
    const lastCardWidth = imageData[imageData.length - 1]?.mode === 'portrait' ? 355 : 800;

    setContainerWidth(adjustedWidth + lastCardWidth > 0 ? adjustedWidth + lastCardWidth : 0);

    // calculate height of section
    const calculatedHeight = Math.ceil((adjustedWidth + window.innerWidth + lastCardWidth) * ratio);
    setSectionHeight(calculatedHeight > 100 ? calculatedHeight : 100); // Minimum de 100vh
  }, []);

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -containerWidth]);

return (
    <section
          ref={targetRef}
          className="relative"
          style={{ height: `${sectionHeight}vh` }}
        >
          <div className="sticky top-60 flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-12">
              {imageData.map((item) => (
                <Card
                  mode={item.mode}
                  key={item.id}
                  title={item.title}
                  id={item.id}
                  image={item.CarrouselImage}
                  year={item.year}
                />
              ))}
            </motion.div>
          </div>
        </section>
)
}

export default HorizontalSlidder;