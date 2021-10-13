//libraries
import express from "express";
import passport from "passport";

//database model
import {MenuModel, ImageModel} from "../../database/allModels";

const Router=express.Router();

/*
Route      : /list
Description: Get menu  based on id
Params     : id
Access     : Public
method     : GET
*/
Router.get("/list/:_id", async (reqq,res)=>{
    try{
        const {_id} = req.params;
        const menus = await MenuModel.findById(_id);
        return res.json({menus});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route      : /image
Description: Get all menu images based on id
Params     : id
Access     : Public
method     : GET
*/
Router.get("/image/:_id", async (req,res)=>{
    try{
        const {_id}=req.params;
        const menus=await ImageModel.findOne(_id);
        return res.json({menus});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;