import React from "react";
import { useParams } from "react-router-dom";

//components
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import Nightlife from "../Components/Nightlife";
import Nutrition from "../Components/Nutrition";

const Home = () =>{
    const {type} = useParams();
    
    return (
    <> 
        <div className="my-5">
            {type==="delivery" && <Delivery />}
            {type==="dining" && <Dining />}
            {type==="night" && <Nightlife />}
            {type==="nutri" && <Nutrition />}
        </div>
    </>
    );
};

export default Home;