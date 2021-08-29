import React from "react";

//components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";

const HomeLayout = (props)=>{
    return (
        <>
            <Navbar />
            <FoodTab />
            <hr />
            <div className="container mx-auto px-4 lg:px-24">
                {props.children} 
            </div>
        </>
    );
};

export default HomeLayout;