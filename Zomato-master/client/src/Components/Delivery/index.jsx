import React, { useState, useEffect } from "react";

//components
import DeliveryCarousal from "./DeliveryCarousal";
import Brand from "./Brand";
import RestaurantCard, { resCards } from "../RestaurantCard";

const Delivery = ()=>{
    const [restaurantList, setRestaurantList] = useState([
        {
            isPro:"",
            isOff:"₹80 OFF",
            durationOfdelivery:"45 min",
            photos:["https://b.zmtcdn.com/data/pictures/1/60941/3511849cda0542a562d7da1bdff2777d_o2_featured_v2.jpg?output-format=webp"],
            name:"Kairali Restaurant",
            restaurantReviewValue:"3.9",
            cuisine:["Kerala", "South Indian", "Seafood", "Biryani"],
            averageCost:"350 for one"
    
        },
        {
            isPro:"",
            isOff:"₹80 OFF",
            durationOfdelivery:"36 min",
            photos:["https://b.zmtcdn.com/data/pictures/1/56771/57458537752446af78e8a821d47fa406_o2_featured_v2.jpg?output-format=webp"],
            name:"Mumbai Tiffin",
            restaurantReviewValue:"4.3",
            cuisine:["North Indian"],
            averageCost:"350 for one"
    
        },
        {
            isPro:"Pro extra 10% off",
            isOff:"₹70 off",
            durationOfdelivery:"42 min",
            photos:["https://b.zmtcdn.com/data/pictures/chains/1/50691/92d9b4053ef0965120828b4fa4eecc3b_o2_featured_v2.jpg?output-format=webp"],
            name:"Meghana Foods",
            restaurantReviewValue:"4.1",
            cuisine:["Andhra", "North Indian", "Seafood", "Beverages"],
            averageCost:"295 for one"
    
        },
        {
            isPro:"",
            isOff:"",
            durationOfdelivery:"28 min",
            photos:["https://b.zmtcdn.com/data/pictures/chains/5/52995/be2450c56cd7dc933c81b7d370f851ec_o2_featured_v2.jpg"],
            name:"Anand Sweets And Savouries",
            restaurantReviewValue:"4.3",
            cuisine:["Mithai", "Street Food", "Beverages"],
            averageCost:"250 for one"
    
        },
        {
            isPro:"Pro extra 10% off",
            isOff:"₹80 off",
            durationOfdelivery:"33 min",
            photos:["https://b.zmtcdn.com/data/pictures/chains/1/50471/3238da54d036bc4a24c69309db215458_o2_featured_v2.jpg"],
            name:"Empire Restaurant",
            restaurantReviewValue:"3.6",
            cuisine:["North Indian", "Mughlai","Arabian", "South Indian", "Chinese"],
            averageCost:"250 for one"
    
        },
        {
            isPro:"",
            isOff:"₹80 off",
            durationOfdelivery:"39 min",
            photos:["https://b.zmtcdn.com/data/pictures/chains/8/58828/6c7007662688dbad4e5c6ed8a1362cb7_o2_featured_v2.jpg"],
            name:"Kalingas",
            restaurantReviewValue:"3.9",
            cuisine:["North Indian", "Odia", "South Indian"],
            averageCost:"100 for one"
    
        },
        {
            isPro:"Pro extra 15% off",
            isOff:"₹80 off",
            durationOfdelivery:"33 min",
            photos:["https://b.zmtcdn.com/data/pictures/chains/8/18443088/499cf5580f97dbb75285c095d05b6cc4_o2_featured_v2.jpg"],
            name:"Samosa Party",
            restaurantReviewValue:"4.1",
            cuisine:["Street Food", "Beverages", "Tea"],
            averageCost:"100 for one"
    
        },
        {
            isPro:"",
            isOff:"₹80 off",
            durationOfdelivery:"35 min",
            photos:["https://b.zmtcdn.com/data/pictures/chains/4/18994874/0b896037622936011783fd5f044ced99_o2_featured_v2.jpg"],
            name:"Paratha Envy",
            restaurantReviewValue:"4.2",
            cuisine:["North Indian", "Fast Food"],
            averageCost:"100 for one"

        },
        {
            isPro:"Pro extra 10% off",
            isOff:"₹80 off",
            durationOfdelivery:"33 min",
            photos:["https://b.zmtcdn.com/data/pictures/chains/7/18379377/5475e448be4f76086d847625d840d7f8_o2_featured_v2.jpg"],
            name:"CakeZone",
            restaurantReviewValue:"4.3",
            cuisine:["Bakery", "Deserts", "Ice Cream"],
            averageCost:"350 for one"

        }
    ]);

    

    return (
        <>
            <DeliveryCarousal />
            <h1 className="text-xl mb-4 mt-10 font-semibold">
                Top brands in spotlight
            </h1>
            <Brand />
            <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
                Delivery Restaurants in Vijay Nagar
            </h1>
            <div className="flex justify-between flex-wrap">
                {restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant}
                key={restaurant._id}
                whereIsthisres="asf"
                />
                ))}
            </div>
        </>
    );
};

export default Delivery;