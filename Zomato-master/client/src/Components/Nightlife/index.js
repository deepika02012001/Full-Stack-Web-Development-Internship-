import React from "react";

// components
import NightlifeCarousal from "./NightlifeCarousal";

const NightLife = () => {
  return (
    <div>
      <NightlifeCarousal />
      <h1 className="text-xl my-4 md:my-8 md:text-3xl md:font-semibold">
        Nightlife Restaurants in Vijay Nagar
      </h1>
    </div>
  );
};

export default NightLife;