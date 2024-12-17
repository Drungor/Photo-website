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
    const defaultWidth = modeP === 'portrait' ? 355 : 800; // Largeur par défaut pour md et supérieur

    // Détermine la largeur en fonction de l'écran
    const imageWidth = typeof window !== "undefined" && window.innerWidth < 768 ? 355 : defaultWidth;

    return (
        <section className="flex flex-row rounded-md" style={{ width: imageWidth }}>
            <Image
                key={id}
                height={500}
                width={imageWidth} // Largeur dynamique ici
                src={src}
                alt={title || 'Image'}
                className="rounded-md object-cover"
                loading="lazy"
            />
        </section>
    );
};

export default CardGallery;