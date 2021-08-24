//libraries
import express from "express";
import passport from "passport";

//database model
import {RestaurantModel} from "../../database/allModels";

//validation
import { ValidateRestaurantCity,ValidateRestaurantId, ValidateRestaurantSearchString } from "../../validation/restaurant";

const Router = express.Router();

/*
Route      : /
Description: Get all the restaurants details based on city
Params     : none (use of url query)
Access     : Public
method     : GET
*/
Router.get("/", async (req,res)=>{
    try{
        await ValidateRestaurantCity(req.query);

        const {city}=req.query;
        const restaurants=await RestaurantModel.find({ city });
        return res.json({restaurants});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route      : /
Description: Get particular restaurant details based on id
Params     : id
Access     : Public
method     : GET
*/
Router.get("/:_id", async (req,res)=>{
    try{
        await ValidateRestaurantId(req.params);

        const {_id}=req.params;
        const restaurant= await RestaurantModel.findOne(_id);
        if(!restaurant) return res.status(404).json({error: "Restaurant Not Found"});
        return res.json({restaurant});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route      : /
Description: Get restaurant details based on search string
Params     : none
Body       : search string
Access     : Public
method     : GET
*/
Router.get("/search", async (req,res)=>{
    try{
        await ValidateRestaurantSearchString(req.body);

        const {searchString} = req.body;
        const restaurant = await RestaurantModel.find({
            name: { $regex: searchString, $options:"i" }
        });
        if(!restaurant) return res.status(404).json({error: `No Restaurants matched with ${searchString}!`});
        return res.json({restaurant});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;
