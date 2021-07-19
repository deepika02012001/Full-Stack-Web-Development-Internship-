import React from "react";

const StreamsInfo=()=>{
    return (
        <>
            <div className="flex flex-col gap-3 lg:gap-8">
                <div className="flex items-center gap-3 md:px-4">
                    <div className="w-40 h-8">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premiere" className="w-full h-full" />
                    </div>
                    <span className="bg-navmobcolor-700 p-1 text-xs text-white rounded-md">Streaming now</span>
                </div>
                <h1 className="text-white mx-5 md:text-3xl lg:text-5xl font-bold">Godzilla vs. Kong</h1>
                <div className="flex flex-col-reverse gap-3 mx-3 lg:gap-5 lg:flex-col">
                <div className="text-white font-light flex flex-col gap-2 md:px-4">
                    <h4>4k &bull; English &bull; Action</h4>
                    <h4>1h 53m &bull; Action, Sci-fi, Thriller &bull; 13+</h4>
                </div>

                </div>
            </div>
        </>
    );
};

export default StreamsInfo;