'use client';

import NavBar from './NavBar';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState, useEffect } from 'react';

interface HeaderProps {
    className?: string;
}

const Header: React.FC<HeaderProps> = ({}) => {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    // Check if screen is larger than 768px
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Detect scroll only if not large screen
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (!isLargeScreen) {
            const previous = scrollY.getPrevious();
            if (previous !== undefined && latest > previous && latest > 20) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        } else {
            setHidden(false); // Always visible on large screens
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            animate={isLargeScreen ? "visible" : hidden ? "hidden" : "visible"}
            transition={isLargeScreen ? {} : { duration: 0.40, ease: "easeInOut" }}
            className="sticky top-0 flex w-full md:top-16  z-50 bg-background md:bg-transparent"
        >
            <section className="flex items-center  p-4 md:mt-0 md:mx-0 md:p-0 justify-between w-full">
                <h1 className="text-2xl md:text-3xl font-semibold ">
                    <a  href="/">レオ</a>
                </h1>
                <NavBar />
            </section>
        </motion.header>
    );
};

export default Header;