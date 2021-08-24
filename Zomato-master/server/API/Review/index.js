//libraries
import express from "express";
import passport from "passport";

//database model
import {ReviewModel} from "../../database/allModels";

const Router = express.Router();

/*
Route      : /new
Description: Add new food review/rating
Params     : none
Body       : review object
Access     : Public
method     : POST
*/
Router.post("/new/", async (req,res)=>{
    try{
        const {reviewData} = req.body;
        await ReviewModel.create(reviewData);
        return res.json({review: "Successdully created review!"});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route      : /delete
Description: delete food review/rating
Params     : _id
Body       : none
Access     : Public
method     : DELETE
*/
Router.delete("/delete/:_id", async (req,res)=>{
    try{
        const {_id} = req.params;
        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review: "Successfully deleted the Review."});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;