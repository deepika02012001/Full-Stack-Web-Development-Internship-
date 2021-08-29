import React from "react";
import Slider from "react-slick";

// components
import { NextArrow, PrevArrow } from "../CarousalArrow";

const Brand = (props) => {
  const logos = [
    "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/5bfbd8dfec807f55def6257118c7bf67_1600755551.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383019.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp",
  ];
  const settingsM = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settingsMD = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const settingsLG = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
      <>
    <div className="md:hidden lg:hidden my-5 mb-32">
      <Slider {...settingsM}>
        {logos.map((logo) => (
          <div className="w-10 h-32 bg-white shadow">
            <img
              src={logo}
              alt="brand"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
    <div className="hidden md:block lg:hidden my-5 mb-32">
      <Slider {...settingsMD}>
        {logos.map((logo) => (
          <div className="w-10 h-32 bg-white shadow">
            <img
              src={logo}
              alt="brand"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
    <div className="hidden lg:block my-5 mb-32">
    <Slider {...settingsLG}>
      {logos.map((logo) => (
        <div className="w-10 h-40 bg-white shadow">
          <img
            src={logo}
            alt="brand"
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </Slider>
  </div>
    </>
  );
};

export default Brand;