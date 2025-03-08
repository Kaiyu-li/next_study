import type {Metadata} from "next";
import {Comforter} from "next/font/google"
import "./globals.css";
import Header from "@/component/header"; // 这个@符号就是创建项目时起的别名，= /src/...

const comforter = Comforter({subsets: ["latin"], weight : '400',
                                display: "swap"
})

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={comforter.className}>
        {children}
        </body>
        </html>
    );
}

// layout is not a client component, you cannot use "use client"