//importing env variables
require("dotenv").config();

//importing libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// microservice routes
import Auth from "./API/Auth";

//Database connection
import ConnectDB from "./database/connection";

const zomato=express();

//application middlewares
zomato.use(express.json);
zomato.use(express.urlencoded({extended: false}));
zomato.use(helmet());
zomato.use(cors());

//application routes
zomato.use("/auth",Auth);

zomato.get("/",(req,res)=>res.json({message:"setup success"}));

zomato.listen(4000,()=>ConnectDB().then(()=>console.log("server is running!!")).catch(()=>console.log("Server is running, but database connection failed!!!")));

