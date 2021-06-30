const mongoose=require("mongoose");

//creating a book schema
const BookSchema=mongoose.Schema({ISBN:"12345book",
title:String,
pubDate:String,
authors:[Number],
language:String,
pubDate: String,
numOfPage:Number,
category:[String],
publication: Number,
});

//create a book model
const BookModel=mongoose.model(BookSchema);

module.exports=BookModel;


