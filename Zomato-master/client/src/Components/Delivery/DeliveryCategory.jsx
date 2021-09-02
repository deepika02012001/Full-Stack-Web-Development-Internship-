import React from "react";

const DeliverySmCard = ({ image, title }) => {
  return (
    <>
      <div className="lg:hidden bg-white shadow rounded-md w-24 md:w-56 relative overflow-hidden">
        <div className="w-full h-24 relative">
          <img
            src={image}
            alt="food"
            className="w-full h-full object-cover rounded-t-md"
          />
        </div>
        <div className="relative text-center">
          <h3 className="text-sm my-1 text-center font-light">{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryLgCard = ({ image, title }) => {
  return (
    <>
      <div className="hidden lg:block w-full h-64 relative px-4 overflow-hidden">
        <div className="w-full h-56 relative">
          <img
            src={image}
            alt="food"
            className="w-full h-full object-cover rounded-md shadow-lg"
          />
        </div>
        <div className="relative text-center">
          <h3 className="text-xl my-1 font-medium">{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryCategory = (props) => {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
};

export default DeliveryCategory;