import React from "react";

const SimpleInfo=()=>{
    return(
        <>
            <div className="w-full h-35 my-2 mx-auto flex items-center lg:gap-10"  style={{background: `linear-gradient(to bottom right, #071c3d, #ad032c)`}}>
                <div className="flex flex-col items-center gap-2 my-3">
                <div className="w-8 h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 mx-10 lg:mx-20">
                    <img className="w-full h-full" src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" />
                </div>
                <div className="w-12 h-4 mx-10 md:w-20 md:h-8 lg:w-20 lg:h-8 lg:mx-20">
                    <img src="https://in.bmscdn.com/discovery-catalog/icons/stream-logo-202101050337.png" alt="stream" className="w-full h-full" />
                </div>
                </div>
                <h2 className="text-white text-xm md:text-2xl lg:text-3xl">Watch handpicked cinema, curated with love</h2>
            </div>
        </>
    );
};

export default SimpleInfo;