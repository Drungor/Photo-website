"use client";

import { motion, useTransform, useScroll } from 'motion/react';
import { useRef, useLayoutEffect, useState } from 'react';
import Card from './Components/Card';

const dummyData = [
  {
    id: 1,
    title: 'Country side',
    CarrouselImage: '/carrousel-pictures/temple.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'portrait',
    gallery: [],
  },
  {
    id: 2,
    title: 'New Zealand',
    CarrouselImage: '/carrousel-pictures/nz-landscape.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'landscape',
  },
  {
    id: 3,
    title: 'Work',
    CarrouselImage: '/carrousel-pictures/seaside-japan.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'portrait',
  },
  {
    id: 4,
    title: 'Work',
    CarrouselImage: '/carrousel-pictures/nara.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'portrait',
  },
  {
    id: 5,
    title: 'Work',
    CarrouselImage: '/carrousel-pictures/coffee.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'portrait',
  },
  {
    id: 6,
    title: 'Work',
    CarrouselImage: '/carrousel-pictures/coffee.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'portrait',
  },
  {
    id: 7,
    title: 'New Zealand',
    CarrouselImage: '/carrousel-pictures/nz-landscape.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'landscape',
  },
  {
    id: 8,
    title: 'Work',
    CarrouselImage: '/carrousel-pictures/seaside-japan.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'portrait',
  }
];

export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(100); // Initialiser avec une valeur par défaut
  const gap = 48; // Espace entre les cartes (ajuste selon tes styles)
  const ratio = 0.1; // Hauteur de la section par rapport à la largeur totale (ajuste selon tes besoins)

  // Calculer la largeur totale et la hauteur de la section
  useLayoutEffect(() => {
    const totalWidth = dummyData.reduce((acc, item, index) => {
      const cardWidth = item.mode === 'portrait' ? 355 : 800;
      return acc + cardWidth + (index === dummyData.length - 1 ? 0 : gap); // Pas de gap après la dernière carte
    }, 0);

    const adjustedWidth = totalWidth - window.innerWidth;

    // Prendre en compte la largeur de la dernière carte pour s'assurer qu'elle est complètement visible
    const lastCardWidth = dummyData[dummyData.length - 1]?.mode === 'portrait' ? 355 : 800;

    setContainerWidth(adjustedWidth + lastCardWidth > 0 ? adjustedWidth + lastCardWidth : 0);

    // Calculer la hauteur de la section
    const calculatedHeight = Math.ceil((adjustedWidth + window.innerWidth + lastCardWidth) * ratio);
    setSectionHeight(calculatedHeight > 100 ? calculatedHeight : 100); // Minimum de 100vh
  }, []);

  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -containerWidth]);

  return (
    <>
      <main className="ml-20">
        <h1 className="fixed text-2xl font-normal tracking-widest mb-10">
          RECENT WORK
        </h1>
        <section
          ref={targetRef}
          className="relative"
          style={{ height: `${sectionHeight}vh` }}
        >
          <div className="sticky top-60 flex items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-12">
              {dummyData.map((item) => (
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
      </main>
    </>
  );
}