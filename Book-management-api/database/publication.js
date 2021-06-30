const mongoose=require("mongoose");

//create Publication schema

const PublicationSchema=mongoose.Schema({
    id:Number,
    name:String,
    books:[String],
    
});

//create author model

const PublicationModel=mongoose.model("publications",PublicationSchema);

//publications- in atlas mongodb we have a collection name as publications

module.exports=PublicationModel;

