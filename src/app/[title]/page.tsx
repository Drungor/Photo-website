'use client';

import { usePathname } from "next/navigation";
import GallerySlider from "../Components/GallerySlider";
import CardGallery from "../Components/CardGallery";
import imageData from "../data/project";




export default function Gallery() {

  const pathname = usePathname(); 
  const title = pathname.split("/")[1].replace("%20", " ");
  const parent = imageData.find((item) => item.title === title);


  if (!parent) {
    return (
      <div className="text-center text-gray-500 mt-10">
        <p>Not found "{title}"</p>
      </div>
    );
  }

  return (
    <>
      <main className="mx-4 md:ml-20 relative">
        <h1 className="my-8 md:sticky md:top-32 text-2xl font-normal tracking-widest">
          {parent.title}
        </h1>
        <GallerySlider gallery={parent.gallery}>
          {parent.gallery.map((item) => (
            <CardGallery 
              key={item.id} 
              id={item.id}
              src={item.src}
              alt={item.title}
              modeP={item.mode}
            />
          ))}
        </GallerySlider>
      </main>
    </>
  );
}


