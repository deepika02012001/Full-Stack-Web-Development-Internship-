//libraries
import express from "express";
import passport from "passport";

//database model
import {FoodModel} from "../../database/allModels";

//validation
import { ValidateRestaurantId,ValidateCategory } from "../../validation/food";

const Router = express.Router();

/*
Route      : /
Description: Get all food based on particular restaurant
Params     : id (of restaurant)
Access     : Public
method     : GET
*/
Router.get("/r/:_id", async (req,res)=>{
    try{
        await ValidateRestaurantId(req.params);

        const {_id}=req.params;
        const foods = await FoodModel.find({restaurant: _id});
        return res.json({foods});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route     /:_id
Des       Get food based on id
Params    _id
Access    Public
Method    GET  
*/
Router.get("/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      const foods = await FoodModel.findById(_id);
  
      return res.json({ foods });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });  

/*
Route      : /
Description: Get all food based on particular category
Params     : id (of restaurant)
Access     : Public
method     : GET
*/
Router.get("/r/:category", async(req,res)=>{
    try{
        await ValidateCategory(req.params);
        
        const {category} = req.params;
        const foods = await FoodModel.find({ category: {$regex: category, $options: "i"}});
        return res.json({foods});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;