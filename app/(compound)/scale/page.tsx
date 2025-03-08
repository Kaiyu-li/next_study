import React from 'react';
import homeSrc from "@/public/p1.jpg";
import Hero from "@/component/hero";
import scaleSrc from "@/public/p3.jpg"


export default function page() {

    return(

        <div>
            <Hero imgUrl={scaleSrc} altTxt="Scale" content="听老婆的话会发达"/>
        </div>
    )

}