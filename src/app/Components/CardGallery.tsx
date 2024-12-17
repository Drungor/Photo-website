'use client';

import Image  from "next/image";
import {useState , useEffect} from "react";

interface CardGalleryProps {
    id: number;
    modeP: string;
    src: string;
    title?: string;
    alt?: string;
}



const CardGallery: React.FC<CardGalleryProps> = ({id,modeP,title,src,alt}) => {
    const width = modeP === 'portrait' ? 355 : 800;

    
    return (
        <section className="flex flex-row"
            style = {{width: width}}>
                <Image
                key={id}
                height={500}
                width={width}
                src={src}
                alt={title || 'Image'}
                className="rounded-md object-fit"
                loading="lazy"
                />
        </section>
    );
}

export default CardGallery;