'use client';

import Image from "next/image";

interface CardGalleryProps {
    id: number;
    modeP: string;
    src: string;
    title?: string;
    alt?: string;
}

const CardGallery: React.FC<CardGalleryProps> = ({ id, modeP, title, src, alt }) => {
    const defaultWidth = modeP === 'portrait' ? 355 : 800; 
    const imageWidth = typeof window !== "undefined" && window.innerWidth < 768 ? 355 : defaultWidth;

    return (
        <section className="flex flex-row rounded-md" style={{ width: imageWidth}}>
            <Image
                key={id}
                height={500}
                width={imageWidth} //dynamic width
                src={src}
                alt={title || 'Image'}
                className="rounded-md object-cover"
                loading="lazy"
            />
        </section>
    );
};

export default CardGallery;