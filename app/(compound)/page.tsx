import React from 'react';
import homeSrc from '../../public/p1.jpg'
import Hero from "@/component/hero";

export default function page() {

    return (

        <Hero imgUrl={homeSrc} altTxt="home" content="祝我家宝贝顺利QE"/>
    );



}