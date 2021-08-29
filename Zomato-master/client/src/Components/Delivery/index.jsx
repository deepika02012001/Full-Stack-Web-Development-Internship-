import React from "react";

//components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";

const Delivery = ()=>{
    return (
        <>
            <DeliveryCarousal />
            <h1 className="text-xl mb-4 mt-10 font-semibold">
                Top brands in spotlight
            </h1>
            <Brand />
            <h1 className="text-xl mb-4 mt-10 font-semibold">
                Top Restaurants
            </h1>
            <RestaurantCard />
        </>
    );
};

export default Delivery;