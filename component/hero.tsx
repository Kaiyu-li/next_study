import Image, {StaticImageData} from "next/image";
import homeSrc from "@/public/p1.jpg";
import React from "react";

interface Iprops {
    imgUrl: StaticImageData;
    altTxt: string;
    content: string;

}


export default function Hero(props: Iprops) {
    return (

        <div className=" h-screen relative">
            <div className="absolute inset-0 -z-10">
                <Image src={props.imgUrl} fill alt={props.altTxt} style={{ objectFit: 'cover' }}/>
                <div className='absolute inset-0 bg-gradient-to-r from-gray-800' ></div>
            </div>

            <div className="flex justify-center pt-48">
                <h1 className="text-white text-5xl">{props.content}</h1>

            </div>

        </div>


    )


}