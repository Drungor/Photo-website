"use client";

import { useRouter, usePathname } from 'next/navigation';

const NavBar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { label: 'HOME', path: '/' },
        { label: 'CONTACT', path: '/contact' },
    ];

    return (
        <nav>
            <div>
                <ul className="flex gap-4  font-bold tracking-widest text-xl md:text-2xl h-auto">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <a 
                                href={item.path}
                                className={pathname === item.path ? 'text-typo h-full' : 'text-secondary'}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;