const mongoose=require("mongoose");

//create author schema

const AuthorSchema=mongoose.Schema({
    id:Number,
    name:String,
    books:[String],
    
});

//create author model

const AuthorModel=mongoose.model("authors",AuthorSchema);

//authors- in atlas mongodb we have a collection name as authors

module.exports=AuthorModel;

