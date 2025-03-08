import Header from "@/component/header";
import {Inter} from "next/font/google"


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
        <Header/>
        {children}
        </>
    );
}