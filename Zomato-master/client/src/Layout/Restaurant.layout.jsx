import React,{ useState, useEffect }  from "react";

//components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";

const RestaurantLayout =()=>{
    const [restaurant, setRestaurant] = useState({
        images: [
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/da66b5379ee65458faaad20d37fef916.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/da66b5379ee65458faaad20d37fef916.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/cdff5b50825246bcad38e93b4aca42fd.jpg?fit=around|300:273&crop=300:273;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/c3463d5259bdcc8b81baef8d9051117d.jpg?fit=around|300:273&crop=300:273;*,*",
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/9fdbca8fc99781e6758620ffe94f4df6.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
            "https://b.zmtcdn.com/data/pictures/chains/8/54308/9aa51854ff41c62c3baa79a3f01791c5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        ],
        name: "",
        cuising: "",
        address: "",
      });
    return (
        <>
      {" "}
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-24 pb-10 ">
            <ImageGrid images={restaurant.images} />
      </div>
        </>
    );
};

export default RestaurantLayout;