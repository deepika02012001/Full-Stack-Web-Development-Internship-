import React from "react";
import Slider from "react-slick";

//components
import PictureCarousalCard from "../PictureCarousal";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const NightlifeCarousal = ()=>{
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    const settingsM = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
      const settingsMD = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
    
    return (
        <>
    <div className="hidden lg:block w-full">
        <Slider {...settings}>
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
        </Slider>
    </div>
        <div className="hidden md:block lg:hidden w-full">
        <Slider {...settingsMD}>
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
        </Slider>
    </div>
    <div className="md:hidden lg:hidden w-full">
        <Slider {...settingsM}>
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
            <PictureCarousalCard />
        </Slider>
    </div>
    </>
    );
};

export default NightlifeCarousal;