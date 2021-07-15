import React from "react";

// Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component";

import SimpleInfo from "../components/SimpleInfo/SimpleInfo.component";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-8">
      <SimpleInfo />
        <h1 className="text-2xl font-bold text-gray-800 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
    </>
  );
};

export default HomePage;