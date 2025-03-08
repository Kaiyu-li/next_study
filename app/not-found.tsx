import React from 'react';
import {link} from "node:fs";

export default function NotFound() {
    return (
        <div className="h-screen w-screen  flex items-center">
            <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div className="max-w-md flex flex-col items-center text-center gap-7">
                    <div className="text-5xl font-dark font-bold">404</div>
                    <p className="text-2xl md:text-3xl font-light leading-normal">
                        Sorry, we couldn't find this page.
                    </p>

                    <a href='/'
                       className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
                        Back to Homepage
                    </a>
                </div>
                <div className="max-w-lg">
                    <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2395 1800"
                        width="400"
                    >
                        <defs>
                            <style>
                                {`
                                    .cls-1 { fill: #d6b49a; }
                                    .cls-1, .cls-10, .cls-11, .cls-13, .cls-14, .cls-15,
                                    .cls-17, .cls-2, .cls-4, .cls-5, .cls-6 { stroke: #000; }
                                    .cls-1, .cls-11, .cls-13, .cls-14, .cls-16, .cls-8 { stroke-linecap: round; stroke-linejoin: round; }
                                    .cls-1, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16,
                                    .cls-17, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9 { stroke-width: 3px; }
                                    .cls-2 { fill: #020202; }
                                    .cls-10, .cls-12, .cls-15, .cls-17, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-9 { stroke-miterlimit: 10; }
                                    .cls-3 { fill: #818181; }
                                    .cls-12, .cls-16, .cls-3, .cls-7, .cls-8, .cls-9 { stroke: #191818; }
                                    .cls-4 { fill: #dcdbda; }
                                    .cls-5 { fill: #4ea7f1; }
                                    .cls-14, .cls-6 { fill: #f8f3ed; }
                                    .cls-16, .cls-7 { fill: #333; }
                                    .cls-13, .cls-8 { fill: none; }
                                    .cls-9 { fill: #f8f59c; }
                                    .cls-10, .cls-11 { fill: #f3d2c9; }
                                    .cls-15 { fill: #8bb174; }
                                    .cls-17 { fill: #da4e22; }
                                `}
                            </style>
                        </defs>
                        <title>Artboard 1 copy</title>
                        <path /* SVG Path Content */ />
                        {/* Additional SVG Paths */}
                    </svg>
                </div>
            </div>
        </div>
    );
}