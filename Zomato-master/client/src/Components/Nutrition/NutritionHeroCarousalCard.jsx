import React from "react";

const NutritionHeroCarousalCard = (props)=>{
    return (
        <div className="h-40 md:h-full lg:h-full">
            <img src={props.image} alt="medicine" className="w-full h-full" />
        </div>
    );
};

export default NutritionHeroCarousalCard;