import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from "react-slick";

const HeroCarousel=()=>{
    const settings = {
        arrows: true,
        centerMode: true,
        centerPadding: "350px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
        <HeroSlider {...settings}>
            {images.map((image)=>(
                <div className="w-20 h-80">
                    <img src={image} alt="testing" className="w-full h-full" />
                </div>
            ))}
        </HeroSlider>
    </>
    );
};

export default HeroCarousel;