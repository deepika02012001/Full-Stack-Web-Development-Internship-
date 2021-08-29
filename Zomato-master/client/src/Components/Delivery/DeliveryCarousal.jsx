import React from "react";
import Slider from "react-slick";

// components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const DeliveryCarousal = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
      title: "biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/cf9/08bf86a8c902df8e6d703e374391ecf9.jpg",
      title: "Kesari Bath",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/742929dcb631403d7c1c1efad2ca2700.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/aebeb88b78a4a83ea9e727f234899bed1602781186.png",
      title: "Chaat",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/a4a/d1629df3f14e0f6585cf51d1bb666a4a.jpg?output-format=webp",
      title: "Cake",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/06a/af146087e76aed8c0baa90a84a6f206a.jpg",
      title: "Sagu",
    },
    {
        image:
          "https://b.zmtcdn.com/data/pictures/7/18683377/24752c348813e311d6514427909ccb5f_o2_featured_v2.jpg",
        title: "Variety Dosa",
    },
    {
        image:
          "https://b.zmtcdn.com/data/dish_photos/64b/c97a8f7cd97492a00d64a295c080164b.jpg?output-format=webp",
        title: "Idli Vada",
    }
  ];
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <h1 className="text-xl mb-4 font-semibold">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>

      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DeliveryCarousal;