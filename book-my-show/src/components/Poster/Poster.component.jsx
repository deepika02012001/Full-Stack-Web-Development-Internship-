import React from "react";

const Poster=(props)=>{
    return (
        <>
        <div className="flex flex-col items-start gap-2 px-3">
            <div className="h-80">
                <img src={props.src} alt={props.title} className="w-full h-full rounded-xl" />
            </div>
            <h3 className={`text-lg font-bold text-white ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.title}</h3>
            <h4 className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}>{props.subtitle}</h4>
        </div>
        </>
    );
};

export default Poster;