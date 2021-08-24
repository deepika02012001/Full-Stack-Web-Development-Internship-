//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

//Models
import {UserModel} from "../../database/user";

//validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

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
        await ValidateSignup(req.body.credentials);

        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token=newUser.generateJwtToken();
        return res.status(200).json({token, status:"success"});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route      : /signin
Description: Signin with email and password
Params     : none
Access     : Public
method     : POST
*/
Router.post("/signin", async (req,res)=>{
    try{
        await ValidateSignin(req.body.credentials);

        const user = await UserModel.findByEmailAndPassword(req.body.credentials);
        
        const token=user.generateJwtToken();
        return res.status(200).json({token, status:"success"});
    } catch(error){
        return res.status(500).json({error: error.message});
    }
});

/*
Route      : /google
Description: Signin with google
Params     : none
Access     : Public
method     : POST
*/
Router.get("/google", passport.authenticate("google",{
    scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email"
    ]
})
);

/*
Route      : /google/callback
Description: Google Signin callback
Params     : none
Access     : Public
method     : POST
*/
Router.get("/google/callback", passport.authenticate("google", {failureRedirect: "/"}),
(req, res)=>{
    return res.json({ token: req.session.passport.user.token});
});

export default Router;