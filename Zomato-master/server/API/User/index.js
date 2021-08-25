//libraries
import express from "express";
import passport from "passport";

//database model
import {UserModel} from "../../database/allModels";

//validation
import { ValidateUserData, ValidateUserID, ValidateUserId } from "../../validation/user";

const Router = express.Router();

/*
Route      : /
Description: Get user details based on id
Params     : _id
Body       : none
Access     : Public
method     : GET
*/
Router.get("/:_id", async (req,res)=>{
    try{
        await ValidateUserId(req.params);

        const {_id} = req.params;
        const getUser = await UserModel.findById(_id);
        return res.json({user: getUser});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route      : /update
Description: update user details based on id
Params     : _id
Body       : user data
Access     : Public
method     : PUT
*/
Router.put("/update/:_userId", async (req,res)=>{
    try{
        await ValidateUserID(req.params);
        await ValidateUserData(req.body);

        const {_userId} = req.params;
        const userData= req.body;
        const updateUserData = await UserModel.findOneAndUpdate(_userId,{
            $set: userData
        },
        {new: true}
        );
        return res.json({user: updateUserData});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

export default Router;