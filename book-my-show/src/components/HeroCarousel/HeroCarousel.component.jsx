import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from "react-slick";

//component
import { NextArrow,PrevArrow } from "./Arrows.component";

const HeroCarousel = () => {
    const settingsLG = {
      arrows: true,
      autoplay: true,
      centerMode: true,
      dots: true,
      centerPadding: "300px",
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const images=[
        "https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422",
        "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    ];
    return (
        <>
          <div className="lg:hidden">
            <HeroSlider {...settings}>
              {images.map((image) => (
                <div className="w-full h-56 md:h-80 py-3">
                  <img src={image} alt="testing" className="w-full h-full" />
                </div>
              ))}
            </HeroSlider>
          </div>
    
          <div className="hidden lg:block">
            <HeroSlider {...settingsLG}>
              {images.map((image) => (
                <div className="w-full h-96 px-2 py-3">
                  <img
                    src={image}
                    alt="testing"
                    className="w-full h-full rounded-md"
                  />
                </div>
              ))}
            </HeroSlider>
          </div>
        </>
      );
    };
    

export default HeroCarousel;