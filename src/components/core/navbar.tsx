"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactElement, useState, useEffect, Key } from "react";

function link(text: string, href: string, location: string, key: Key): ReactElement {
    return (
        <Link key={key} className={`${"/" + location.split("/").pop() == href ? "text-blue-400 cursor-not-allowed" : "hover:text-blue-400 transition active:translate-y-1/30"}`} href={href}>{text}</Link>
    )
}

export default function Navigation() {
    const [currentURL, setCurrentURL] = useState('');

    useEffect(() => {
        setCurrentURL(window.location.href);
    }, []);

    return (
        //   <div className="flex flex-col min-h-screen">
        <nav className="bg-[#fbf5dd] text-black flex align-center items-center justify-between shadow-md rounded-b-xs sticky top-0">
            <div className="flex align-center items-center">
                <Image src="/FGC-Header.webp" alt="FGC Logo" width={200} height={200} className="mr-[-0.5rem]" />
                <span className="text-6xl text-transparent bg-clip-text bg-clip font-[1000] text-[2.9rem] bg-[url(/jamaica-flag.webp)] bg-[length:100%_auto]">Jamaica</span>
            </div>

            <ul className="grid grid-flow-col gap-6 text-xl mr-4">
                {
                    [
                        { text: "Home", href: "/" },
                        { text: "About", href: "#about" },
                        { text: "Contact", href: "/contact" }
                    ]
                        .map(({ text, href }, i) => {
                            return link(text, href, currentURL, i)
                        })
                }
            </ul>
        </nav>
    )
}