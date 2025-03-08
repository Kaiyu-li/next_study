import React from 'react';
import homeSrc from "@/public/p1.jpg";
import Hero from "@/component/hero";
import reliabilitySrc from "@/public/p3.jpg"


export default function page() {

    return(

        <div>
            <Hero imgUrl={reliabilitySrc} altTxt="Reliability" content="welcome to Reliability"/>
        </div>
    )

}