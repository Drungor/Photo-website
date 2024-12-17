'use client';

import NavBar from './NavBar';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState} from 'react';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({className}) => {
const { scrollY } = useScroll();
const [hidden, setHidden]= useState(false);

useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined && latest > previous && latest > 20) {
        setHidden(true);
    } else {
        setHidden(false);
    }
});

    return (
    <motion.header
        variants={{
            visible: {y: 0},
            hidden: {y: -100},
        }}
        animate= {hidden ? "hidden" : "visible"}
        transition={{duration: 0.35, ease: "easeInOut"}}
        className="sticky top-0 flex w-full items-center md:top-16 z-50">
        <section className="flex justify-end w-full" >
            <h1 className="md:absolute md:left-0 md:top-0 text-3xl "><a href="/">レオ</a></h1>
            <NavBar />
        </section>
    </motion.header>
    );
}

export default Header;