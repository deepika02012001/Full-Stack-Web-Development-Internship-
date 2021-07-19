import React from "react"

//components
import StreamsNavbar from "../components/Navbar/StreamsNavbar.component";
import StreamsHeroCarousel from "../components/StreamsHero/StreamsHeroCarousel.component";

const StreamsLayout=(props)=>{
    return (
    <>
        <StreamsNavbar />
        <StreamsHeroCarousel />
        {props.children}
    </>
    );
};

export default StreamsLayout;