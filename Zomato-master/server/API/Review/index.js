//libraries
import express from "express";
import passport from "passport";

//database model
import {ReviewModel} from "../../database/allModels";

const Router = express.Router();

/*
Route     /
Des       Get all review
Params    resid
BODY      none
Access    Public
Method    GET  
*/
Router.get("/:resid", async (req, res) => {
    try {
      const reviews = await ReviewModel.find({ restaurant: req.params.resid });
      return res.json({ reviews });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
/*
Route      : /new
Description: Add new food review/rating
Params     : none
Body       : review object
Access     : Public
method     : POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try{
        const { _id } = req.session.passport.user._doc;

        const {reviewData} = req.body;
        await ReviewModel.create({ ...reviewData, user: _id });
        return res.json({review: "Successfully created review!"});
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