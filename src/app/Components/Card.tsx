import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
    id?: number;
    title?: string;
    image?: string;
    link?: string;
    year?: string;
    mode?: string;
}

const Card: React.FC<CardProps> = ({ id, title, image, year, mode }) => {

    return (
            <Link 
            href={`${title || ''}`}
            className={`flex flex-col ${
                mode === 'portrait' ? 'h-160 w-full md:w-104 md:h-full ' : 'h-56 w-full md:h-full  md:w-288'
            }`}> 
                <div className="relative w-full h-full mb-4">
                      <Image
                        src={image || ''}
                        alt={title || 'Image'}
                        fill={true}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 80vw, 100vw"
                        className={`rounded-md object-cover h-full w-auto `}
                        />
                    </div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between w-full">
                        <h3 className="text-secondary font-light text-sm sm:text-base tracking-widest opacity-80">
                            / {id}
                        </h3>
                        <p className="text-typo tracking-widest font-semibold text-sm sm:text-base">
                            {title}
                        </p>
                    </div>
                    <div className="flex justify-end w-full text-secondary font-light text-xs sm:text-sm tracking-widest opacity-80">
                        <p>{year}</p>
                    </div>
                </div>
            </Link>
    );
};

export default Card;