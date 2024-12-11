"use client";

import { useRouter, usePathname } from 'next/navigation';

const NavBar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const navItems = [
        { label: 'ワークス', path: '/' },
        { label: 'ショップ', path: '/shop' },
        { label: 'コンタクト', path: '/contact' },
    ];

    return (
        <nav>
            <ul className="flex gap-4 p-2 pr-0 font-bold">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.path}
                            className={pathname === item.path ? 'text-typo' : 'text-secondary'}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;