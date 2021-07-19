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
        <div className="my-10 container px-2 lg:ml-10 lg:w-4/5">
            <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl my-4">Premiere of the Week</h2>
                <PosterSlider config={settings} images={TempPosters} title="" isDark={false} />
            </div>
            <div className="my-8">
                <hr />
            </div>
            <div className="my-8">
            <h2 className="text-gray-800 font-bold text-2xl my-4">Bundles</h2>
                <PosterSlider config={settings} images={TempPosters} title="" isDark={false} />
            </div>
        </div>
        </>
    );
};

export default StreamsPage;