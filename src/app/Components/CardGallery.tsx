'use client';

import Image from "next/image";

interface CardGalleryProps {
    id: number;
    modeP: string;
    src: string;
    title?: string;
    alt?: string;
}

const CardGallery: React.FC<CardGalleryProps> = ({ id, modeP, title, src,alt}) => {

    return (
        <div
            className={`${
            modeP === 'portrait' ? 'h-160 w-full md:w-104 md:h-full ' : 'h-56 w-full md:h-full  md:w-288'
        }`}>
            <div className="relative w-full h-full">
                <Image
                    key={id}
                    fill={true}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 80vw, 100vw"
                    src={src}
                    alt={title || 'Image'}
                    className={`rounded-md object-cover h-full w-auto `}
                />
            </div>
        </div>
    );
};

export default CardGallery;