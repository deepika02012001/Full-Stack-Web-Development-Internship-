import React from "react";
import Slider from "react-slick";
// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

import SimpleInfo from "../components/SimpleInfo/SimpleInfo.component";
//config
import TempPosters from "../config/TempPosters.config";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

const HomePage = () => {
  return (
    <>
    <div className="flex flex-col gap-10">
      <div className="container mx-auto px-4">
      <SimpleInfo />
        <h1 className="text-2xl font-bold text-gray-800 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      
      <div className="bg-postercolor-50 py-12">
        <div className="container mx-auto px-4 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premiere" className="w-full h-full" />
          </div>
          <PosterSlider images={TempPosters} title='Premieres' subtitle="Brand new releases every Tuesday!" isDark={true} />
        </div>
      </div>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider  images={TempPosters} title="Online Streaming Events" isDark={false}/>
      </div>

      <div className="container mx-auto px-4 my-8">
        <PosterSlider  images={TempPosters} title="Outdoor Events" isDark={false}/>
      </div>
      
    </>
  );
};

export default HomePage;