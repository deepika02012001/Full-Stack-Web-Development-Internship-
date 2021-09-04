import React, { useState, useEffect } from "react";

//components
import NightlifeCarousal from "./NightlifeCarousal";
import RestaurantCard from "../RestaurantCard";

const Dining = ()=>{
    const [restaurantList, setRestaurantList] = useState([
        {
            isPro:"Pro - Get 20% off",
            isOff:"",
            durationOfdelivery:"7.5 km",
            photos:["https://b.zmtcdn.com/data/pictures/3/19122613/b449de49b3a577de34d51f797f39e3e0_featured_v2.jpg?output-format=webp"],
            name:"URU Brewpark",
            restaurantReviewValue:"4.3",
            cuisine:["Italian", "North Indian", "Continental", "Seafood"],
            averageCost:"1,500 for two"
    
        },
        {
            isPro:"",
            isOff:"",
            durationOfdelivery:"11.6 km",
            photos:["https://b.zmtcdn.com/data/pictures/2/58882/7bd9ca535e7000d323375dc1b85fcfa9_featured_v2.jpg?output-format=webp"],
            name:"Byg Brewski Brewing Company",
            restaurantReviewValue:"4.7",
            cuisine:["North Indian","Continental","Italian"],
            averageCost:"1,600 for two"
    
        },
        {
            isPro:"Pro - Get 20% off",
            isOff:"",
            durationOfdelivery:"4.8 km",
            photos:["https://b.zmtcdn.com/data/pictures/9/18627369/5b9284ed29595bbf65bb4d85de210448_featured_v2.jpg?output-format=webp"],
            name:"Biergarten",
            restaurantReviewValue:"4.7",
            cuisine:["Continental", "European", "BBQ", "Chinese"],
            averageCost:"2,000 for two"
    
        },
        {
            isPro:"",
            isOff:"",
            durationOfdelivery:"4.6 km",
            photos:["https://b.zmtcdn.com/data/pictures/chains/8/57438/a076112f6a99abeebd433b106560b7a6_featured_v2.jpg"],
            name:"Koramangala Social",
            restaurantReviewValue:"4.5",
            cuisine:["North Indian", "Chinese", "Burger"],
            averageCost:"1,500 for two"
    
        },
        {
            isPro:"Pro - Get 15% off",
            isOff:"",
            durationOfdelivery:"6.5 km",
            photos:["https://b.zmtcdn.com/data/pictures/chains/1/50471/3238da54d036bc4a24c69309db215458_o2_featured_v2.jpg"],
            name:"Hammered",
            restaurantReviewValue:"4.5",
            cuisine:["North Indian", "Chinese","Fast Food"],
            averageCost:"1,400 for two"
    
        },
        {
            isPro:"",
            isOff:"",
            durationOfdelivery:"5.1 km",
            photos:["https://b.zmtcdn.com/data/pictures/3/18816683/5073a38d699c8737911487f4bae70333_featured_v2.jpg"],
            name:"Bob's Bar",
            restaurantReviewValue:"4.3",
            cuisine:["South Indian","Finger Food"],
            averageCost:"1,100 for two"
    
        },
        {
            isPro:"Pro - Get 20% off",
            isOff:"",
            durationOfdelivery:"15.6 km",
            photos:["https://b.zmtcdn.com/data/pictures/9/18758079/ebc69f8a643418091416ad5a49b61a1f_featured_v2.jpg"],
            name:"Fire Station",
            restaurantReviewValue:"4.3",
            cuisine:["Finger Food", "North Indian", "Continental"],
            averageCost:"1,400 for two"
    
        }
    ]);

    return (
        <div>
            <NightlifeCarousal />
            <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
                Restaurants in Vijay Nagar
            </h1>
            <div className="flex justify-between flex-wrap">
                {restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant}
                key={restaurant._id}
                whereIsthisres="asf"
                />
                ))}
            </div>
        </div>
    );
};

export default Dining;