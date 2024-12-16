import Image from "next/image";
import Link from "next/link";

interface CardProps {
    id?: number;
    title?: string;
    image?: string;
    link?: string;
    year?: string;
    mode?: string;
}

const Card: React.FC<CardProps> = ({id, title, image, year, mode}) => {
    const width = mode === 'portrait' ? 355 : 800;

    return (
        <section 
        className=""
        style={{
            height: 600,
            width:width}}>
        <Link href={`${title}`}>
            <div className="mb-4">
                <Image
                    height={500}
                    width={width}
                    src={image || ''}
                    alt={title || 'Image'}
                    className="rounded-md"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between  w-full">
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