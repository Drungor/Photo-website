"use client";

import { motion, useTransform, useScroll } from 'motion/react';
import { useRef } from 'react';
import Card from './Components/Card';

const dummyData = [
  {
    id:1, 
    title: 'Country side', 
    CarrouselImage: '/carrousel-pictures/temple.jpg', 
    link: 'https://www.google.com',
    year: '2021',
    mode: 'portrait',
  },
  {
    id:2,
    title: 'New Zealand',
    CarrouselImage: '/carrousel-pictures/nz-landscape.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'landscape',
  },
  {
    id:3,
    title: 'Work',
    CarrouselImage: '/carrousel-pictures/seaside-japan.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'portrait',
  },
  {
    id:4,
    title: 'Work',
    CarrouselImage: '/carrousel-pictures/nara.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'portrait',
  },
  {
    id:5,
    title: 'Work',
    CarrouselImage: '/carrousel-pictures/coffee.jpg',
    link: 'https://www.google.com',
    year: '2021',
    mode: 'portrait',
  }
]


export default function Home() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({target:targetRef,});

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);
  return (
    <>
    <main className="ml-20">
      <h1 className='fixed text-2xl font-normal tracking-widest mb-10'>RECENT WORK</h1>
     <section ref={targetRef} className='relative h-[300vh]'>
      <div className=' sticky top-60  flex items-center overflow-hidden'>
        <motion.div 
        style={{x}}
        className='flex gap-12'>
          {dummyData.map((item) => (
            <Card 
            mode={item.mode}
            key={item.id} 
            title={item.title} 
            id={item.id}
            image={item.CarrouselImage} 
            year={item.year}/>
          ))
          }
        </motion.div>
      </div>
     </section>
     <div className='mt-10 fixed bottom-10 left-40'>
      <p className='tracking-widest text-lg'>
        Loading bar todo
      </p>
     </div>
    </main>
    </>
  );
}
