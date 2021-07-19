import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from "react-slick";

//component
import { NextArrow,PrevArrow } from "../HeroCarousel/Arrows.component";
import StreamsInfo from "./StreamsInfo.component";
import PosterSlider from "../PosterSlider/PosterSlider.component";
import TempPosters from "../../config/TempPosters.config";

const StreamsHeroCarousel = () => {
    const settingsLG = {
      arrows: true,
      autoplay: true,
      centerMode: true,
      centerPadding: "300px",
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  
    const settings = {
      arrows: true,
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
          <div className="">
                  {/* mobile */}
                  <div className="bg-postercolor-50 md:hidden lg:hidden">
                  <div className="container mx-auto px-4 flex flex-col gap-3">
                    <div className="hidden md:flex">
                      <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="Premiere" className="w-full h-full" />
                    </div>
                    <PosterSlider images={TempPosters} title='Handpicked For You!' subtitle="" isDark={true} />
                  </div>
                  </div>
                  <HeroSlider {...settings}>
                  {images.map((image) => (
                  <div>
                  <div
                    className="relative md:hidden w-full lg:hidden"
                    style={{ height: "calc(50vw)" }}
                  >
                    <div
                      className="absolute z-10 w-full h-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
                      }}
                    />

                    <div className="absolute z-30 left-2 top-2 flex items-center gap-6">
                      <div className=" w-28 h-42 ">
                        <img
                          src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/godzilla-vs-kong-et00122511-16-06-2021-12-47-29.jpg"
                          alt="poster"
                          className="w-full h-full rounded-xl"
                        />
                      </div>
                      <div>
                        
                          <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-3 md:px-4">
                            <div className="w-16 h-4">
                              <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere" className="w-full h-full" />
                            </div>
                            <span className="bg-navmobcolor-700 p-1 text-xs text-white rounded-md">Streaming now</span>
                          </div>
                            <h1 className="text-white font-bold">Godzilla vs. Kong</h1>
                            <div className="text-white font-light flex flex-col gap-2">
                                <h4>4k &bull; English &bull; Action</h4>
                                <h4>1h 53m &bull; Action, Sci-fi, Thriller &bull; 13+</h4>
                            </div>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/godzilla-vs-kong-et00122511-16-06-2021-12-47-29.jpg"
                      alt="poster"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Medium */}
                  <div
                    className="relative hidden md:block w-full lg:hidden"
                    style={{ height: "calc(60vw)" }}
                  >
                    <div
                      className="absolute z-10 w-full h-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
                      }}
                    />

                    <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                      <div className=" w-64 h-96 ">
                        <img
                          src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/godzilla-vs-kong-et00122511-16-06-2021-12-47-29.jpg"
                          alt="poster"
                          className="w-full h-full rounded-xl"
                        />
                      </div>
                      <div>
                        <StreamsInfo />
                      </div>
                    </div>
                    <img
                      src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/godzilla-vs-kong-et00122511-16-06-2021-12-47-29.jpg"
                      alt="poster"
                      className="w-full h-full"
                    />
                  </div>
                  

                  {/* Large */}
                  <div
                    className="relative hidden w-full lg:block"
                    style={{ height: "30rem" }}
                  >
                    <div
                      className="absolute z-10 w-full h-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
                      }}
                    />

                    <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                      <div className=" w-64 h-96 ">
                        <img
                          src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/godzilla-vs-kong-et00122511-16-06-2021-12-47-29.jpg"
                          alt="poster"
                          className="w-full h-full rounded-xl"
                        />
                      </div>
                      <div>
                        <StreamsInfo />
                      </div>
                    </div>
                    <img
                      src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/godzilla-vs-kong-et00122511-16-06-2021-12-47-29.jpg"
                      alt="poster"
                      className="w-full h-full"
                    />
                  </div>
                  </div>
              ))}
            </HeroSlider>
          </div>
        </>
      );
    };
    

export default StreamsHeroCarousel;