import React from "react";
import {Route} from "react-router-dom";

//Layout
import StreamsLayout from "../layouts/Streams.layout";

const DefaultHOC=({ component: Component, ...rest })=>{
    return (
    <>
        <Route 
            {...rest} 
            component={(props)=> (
                <StreamsLayout> 
                    <Component {...props} /> 
                </StreamsLayout>
            )} 
        />
    </>
    );
};

export default DefaultHOC;