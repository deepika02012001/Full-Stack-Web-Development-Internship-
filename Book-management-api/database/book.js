const mongoose=require("mongoose");

//creating a book schema
const BookSchema=mongoose.Schema({
ISBN:String,
title:String,
pubDate:String,
authors:[Number],
language:String,
pubDate: String,
numOfPage:Number,
category:[String],
publication: [Number],
});

//create a book model
const BookModel=mongoose.model("books",BookSchema);

//books- in atlas mongodb we have a collection name as books

module.exports=BookModel;


