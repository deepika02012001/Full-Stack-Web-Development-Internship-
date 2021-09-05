import React from "react";

const NutritionSmCard = ({ image, text }) => {
    return (
      <>
        <div className="lg:hidden bg-white shadow rounded-md w-24 h-28 md:w-56 md:h-48 p-1 relative overflow-hidden">
          <div className="w-full h-22 md:h-42 relative">
            <img
              src={image}
              alt="medicine"
              className="w-full h-full object-contain rounded-t-md"
            />
          </div>
          <div className="relative text-center">
            <h3 className="text-sm my-2 md:my-4 md:text-lg font-light">{text}</h3>
          </div>
        </div>
      </>
    );
  };
  
  const NutritionLgCard = ({ image, text }) => {
    return (
      <>
        <div className="hidden lg:block w-full h-56 relative px-4 overflow-hidden">
        <div className="w-full h-full relative border-2 rounded-md">
          <img
            src={image}
            alt="medicine"
            className="w-full h-42 p-2 object-contain"
          />
        </div>
        <div className="relative bottom-14 text-center">
            <h3 className="text-xl font-base">{text}</h3>
        </div>
      </div>
      </>
    );
  };

const NutritionCarousalCard=(props)=>{
    return (
        <>
        <NutritionSmCard {...props} />
        <NutritionLgCard {...props} />
        </>
    );
};

export default NutritionCarousalCard;