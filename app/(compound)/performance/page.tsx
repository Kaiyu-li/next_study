import React from 'react';
import homeSrc from "@/public/p1.jpg";
import Hero from "@/component/hero";
import performanceSrc from "@/public/p2.jpg"


export default function page() {

    return(

        <div>
            <Hero imgUrl={performanceSrc} altTxt="Performance" content="我是周教授的小跟班
           "/>
        </div>
    )

}