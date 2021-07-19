import React from "react";

import Poster from "../components/Poster/Poster.component";
import PlaysFilters from "../components/PlaysFilters/PlaysFilters.component";

const EventsPage=()=>{
    return (
        <>
        <div className="container mx-auto px-4">
            <div className="w-full lg:flex lg:flex-row-reverse gap-4">
                <div className="lg:w-3/4">
                    <h2 className="text-2xl font-bold mb-4">Events in Bengaluru</h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312523-zxlyelvern-portrait.jpg" title="Uncommon Sense with Jeeveshu Ahluwalia - Bangalore" subtitle="Comedy | Hindi | All age groups | 1hr" />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312523-zxlyelvern-portrait.jpg" title="Uncommon Sense with Jeeveshu Ahluwalia - Bangalore" subtitle="Comedy | Hindi | All age groups | 1hr" />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312523-zxlyelvern-portrait.jpg" title="Uncommon Sense with Jeeveshu Ahluwalia - Bangalore" subtitle="Comedy | Hindi | All age groups | 1hr" />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                            <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312523-zxlyelvern-portrait.jpg" title="Uncommon Sense with Jeeveshu Ahluwalia - Bangalore" subtitle="Comedy | Hindi | All age groups | 1hr" />
                        </div>
                    </div>
                </div>
                <div className="lg:w-3/12">
                    <h2 className="text-2xl font-bold mb-4">Filters</h2>
                    <PlaysFilters title="Date" tags={["Today","Tomorrow","This Weekend"]} />
                    <PlaysFilters title="Language" tags={["Tamil","Telugu","English"]} />
                    <PlaysFilters title="Categories" tags={["Theatre"]} />
                    <PlaysFilters title="Genres" tags={["Drama","Adaptation","Historical","Comedy","Mythological","Online Streaming Plays"]} />
                    <PlaysFilters title="More Filters" tags={["Kids allowed"]} />
                    <PlaysFilters title="Price" tags={["Free","0-500","501-2000","Above 2000"]} />
                </div>
            </div>
        </div>
        </>
    );
};

export default EventsPage;