import React, {useState} from "react";
import Slider from "react-slick";

//components
import NutritionCarousalCard from "./NutritionCarousalCard";
import { NextArrow, PrevArrow } from "../CarousalArrow";

const NutritionCarousal = ()=>{
    const [nutriCards, setNutriCards] = useState([
        {
            image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/baf809f0523c43d29f51d1e05f9f46be_1629263595.png?output-format=webp",
            text:"Proteins and Fitness"
        },
        {
            image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/de47fcc91ced4e33b354909e897456e8_1628243615.png?output-format=webp",
            text:"Sleep and Stress"
        },
        {
            image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/89fdc1246c12461db02d853a513ab616_1628243591.png?output-format=webp",
            text:"Digestion and Weight Loss"
        },
        {
            image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/473ea322835ea870c0658b883c22dcf6_1626688305.png?output-format=webp",
            text:"Omegas and CoQ10"
        },
        {
            image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/76336cff326938873f922d4c1c72066c_1628243556.png?output-format=webp",
            text:"Beauty and Skincare"
        },
        {
            image:"https://dote.zmtcdn.com/prod/data/admin_assets/images/c021611d9bce8289f48f59303b2d0fc6_1628243496.png?output-format=webp",
            text:"Immunity and Bones"
        }
    ]);
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
          <h1 className="text-xl mb-4 my-12 font-semibold">
            Nutrition to boost your health
          </h1>
          <div className="lg:hidden flex gap-3 flex-wrap justify-between">
            {nutriCards.map((props) => (
                <NutritionCarousalCard {...props} />
            ))}
          </div>

        <div className="hidden lg:block">
            <Slider {...settings}>
            {nutriCards.map((props) => (
                <NutritionCarousalCard {...props} />
            ))}
            </Slider>
        </div>
        </>
      );
};

export default NutritionCarousal;