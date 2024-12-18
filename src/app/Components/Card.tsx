'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface CardProps {
    id?: number;
    title?: string;
    image?: string;
    link?: string;
    year?: string;
    mode?: string;
}

const Card: React.FC<CardProps> = ({ id, title, image, year, mode }) => {
    const [dimensions, setDimensions] = useState({ 
        width: 355, 
        height: 236,
        isMobile: false,
        heightOfSection: 600,
    });

    useEffect(() => {
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

        // Initial calculation
        calculateDimensions();

        // Add event listener for window resize
        window.addEventListener('resize', calculateDimensions);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', calculateDimensions);
        };
    }, [mode]);

    return (
        <section
            className=""
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