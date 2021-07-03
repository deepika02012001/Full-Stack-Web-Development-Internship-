const mongoose=require("mongoose");

//create author schema

const AuthorSchema=mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    books:[String],
    
});

//create author model

const AuthorModel=mongoose.model("authors",AuthorSchema);

//authors- in atlas mongodb we have a collection name as authors

module.exports=AuthorModel;

