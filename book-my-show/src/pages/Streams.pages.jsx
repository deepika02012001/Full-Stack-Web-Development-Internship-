import React from "react";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config";

const StreamsPage=()=>{
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <>
        <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4 my-4">
            <img className="w-full h-full" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/available-buy-rent-strip-web-collection-202103160404.png" alt="stream1" />
            </div>
            <div className="container mx-auto px-4">
            <h2 className="text-gray-800 font-bold text-2xl my-4">Premiere of the Week</h2>
                <PosterSlider config={settings} images={TempPosters} title="" isDark={false} />
            </div>
            <div className="container mx-auto px-4">
            <h2 className="text-gray-800 font-bold text-2xl my-4">Bundles</h2>
                <PosterSlider config={settings} images={TempPosters} title="" isDark={false} />
            </div>
            <div className="container mx-auto px-4">
            <h2 className="text-gray-800 font-bold text-2xl my-4">Mind Game Movies</h2>
                <PosterSlider config={settings} images={TempPosters} title="" isDark={false} />
            </div>
            <div className="container mx-auto px-4">
            <h2 className="text-gray-800 font-bold text-2xl my-4">Stream Recommends</h2>
                <PosterSlider config={settings} images={TempPosters} title="" isDark={false} />
            </div>
        </div>
        </>
    );
};

export default StreamsPage;