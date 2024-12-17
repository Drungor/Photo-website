"use client";

import {useState, useEffect, useLayoutEffect} from 'react';
import HorizontalScroll from './HorizontalScroll';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
    const pathname = usePathname();
    const isContactPage = pathname === '/contact';


    return (
        <footer>
            {!isContactPage && <HorizontalScroll />}
            <div className="opacity-75 m-4  md:m-0 md:fixed bottom-10 right-20 md:opacity-100">
                <div className="flex justify-end text-secondary font-medium tracking-widest ">
                    <p>
                        <a className="font-semibold" href="https://leomtr.com/" target="_blank" rel="noopener noreferrer">
                            メタ レオポルド
                        </a> © 2024
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;