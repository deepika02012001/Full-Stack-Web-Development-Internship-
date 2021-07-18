import React from "react";

const SimpleInfo=()=>{
    return(
        <>
            <div className="w-full h-20 my-10 flex items-center"  style={{background: `linear-gradient(to bottom right, #071c3d, #ad032c)`}}>
                <div className="w-12 h-12 mx-10 lg:mx-20">
                    <img className="w-full h-full" src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" />
                </div>
                <h2 className="text-white text-xm md:text-2xl lg:text-3xl">Watch handpicked cinema, curated with love</h2>
            </div>
        </>
    );
};

export default SimpleInfo;