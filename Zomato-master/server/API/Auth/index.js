//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Models
import {UserModel} from "../../database/user";

const Router = express.Router();

/*
Route      : /signup
Description: Register New User with email, password, (fullname and phonenumber)
Params     : none
Access     : Public
method     : POST
*/
Router.post("/signup", async (req,res)=>{
    try{
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token=newUser.generateJwtToken();
        return res.status(200).json({token, status:"success"});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route      : /signup
Description: Signup with email and password
Params     : none
Access     : Public
method     : POST
*/

export default Router;