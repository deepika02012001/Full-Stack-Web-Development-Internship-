import React,{ useState, useEffect }  from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
import InfoButtons from "../Components/restaurant/InfoButtons";

const RestaurantLayout =(props)=>{
    const [restaurant, setRestaurant] = useState({
        images: [
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/da66b5379ee65458faaad20d37fef916.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/da66b5379ee65458faaad20d37fef916.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/cdff5b50825246bcad38e93b4aca42fd.jpg?fit=around|300:273&crop=300:273;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/c3463d5259bdcc8b81baef8d9051117d.jpg?fit=around|300:273&crop=300:273;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/9fdbca8fc99781e6758620ffe94f4df6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/9aa51854ff41c62c3baa79a3f01791c5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        ],
        name: "Deepika",
        restaurantRating: "4.3",
        deliveryRating: "4.5",
        rating: "4.5",
        cuising: "North Indian cuisine",
        address: "Bangalore",
      });
    return (
        <>
      {" "}
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-24 pb-10 ">
            <ImageGrid images={restaurant.images} />
            <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.rating || 0}
          deliveryRating={restaurant?.rating || 0}
          cuisine={restaurant?.cuising}
          address={restaurant?.address}
        />
        <div className="my-4 flex flex-wrap gap-3">
         <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          
        </div>
        <div className="relative">{props.children}</div>
      </div>
        </>
    );
};

export default RestaurantLayout;