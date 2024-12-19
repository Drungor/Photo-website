'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface CardProps {
    id?: number;
    title?: string;
    image?: string;
    link?: string;
    year?: string;
    mode?: string;
}

const Card: React.FC<CardProps> = ({ id, title, image, year, mode }) => {
    const [dimensions, setDimensions] = useState(() => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
        const width = isMobile ? 355 : mode === 'portrait' ? 355 : 800;
        const height = isMobile && mode === 'portrait' ? 236 : 600;
        const heightOfSection = isMobile && mode === 'landscape' ? 300 : 600;
        return { width, height, isMobile, heightOfSection };
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const calculateDimensions = () => {
            const width = mode === 'portrait' ? 355 : 800;
            const heightOfPicture = 600;
            const isMobile = window.innerWidth < 768;
            setDimensions({
                width: isMobile ? 355 : width,
                height: isMobile && mode === 'portrait' ? 236 : heightOfPicture,
                heightOfSection: isMobile && mode === 'landscape' ? 300 : 600,
                isMobile,
            });
        };

        calculateDimensions();
        window.addEventListener('resize', calculateDimensions);

        return () => {
            window.removeEventListener('resize', calculateDimensions);
        };
    }, [mode]);

    return (
        <section
            className="card-container relative flex flex-col"
            style={{
                height: dimensions.heightOfSection,
                width: dimensions.width,
            }}
        >
            <Link href={`${title || ''}`}>
                <div className="mb-4">
                    <Image
                        height={dimensions.height}
                        width={dimensions.width}
                        src={image || ''}
                        alt={title || 'Image'}
                        className="rounded-md"
                        layout="intrinsic"
                        loading="lazy"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between w-full">
                        <h3 className="text-secondary font-light text-base tracking-widest opacity-80">
                            / {id}
                        </h3>
                        <p className="text-typo tracking-widest font-semibold text-base">
                            {title}
                        </p>
                    </div>
                    <div className="flex justify-end w-full text-secondary font-light text-sm tracking-widest opacity-80">
                        <p>{year}</p>
                    </div>
                </div>
            </Link>
        </section>
    );
};

export default Card;