'use client' //标记为一个客户端组件  client hook

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";


const linkData = [
    {name: 'Performance', href: '/performance'},
    {name: 'Reliability', href: '/reliability'},
    {name: 'Scale', href: '/scale'},
]

// const accesslink = [
//     '/', '/performance', '/reliability', '/scale',
// ]


export default function Header() {

    const pathname = usePathname()

    // if (!accesslink.includes(pathname)) {return null}

    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto text-white p-8 items-center">
                <Link className="text-3xl font-bold" href="/">Home
                </Link>

                <div className="text-xl space-x-4">
                    {
                        linkData.map((link) =>
                            <Link
                                key={link.name}
                                href={link.href}
                                className={pathname === link.href ? 'text-purple-500 font-bold' : ''}>

                                {link.name}
                            </Link>
                        )
                    }

                </div>
            </div>
        </div>
    )
}