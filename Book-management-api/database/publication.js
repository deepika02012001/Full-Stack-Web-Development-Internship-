const mongoose=require("mongoose");

//create Publication schema

const PublicationSchema=mongoose.Schema({
    id:Number,
    name:String,
    books:[String],
    
});

//create author model

const PublicationModel=mongoose.model(PublicationSchema);

module.exports=PublicationModel;

