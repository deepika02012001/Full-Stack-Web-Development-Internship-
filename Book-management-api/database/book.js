const mongoose=require("mongoose");

//creating a book schema
const BookSchema=mongoose.Schema({
ISBN:{
    type: String,
    required: true,
    minLength: 7,
    maxLength: 10
},
title:{
    type: String,
    required: true
},
pubDate:{
    type: String,
    required: true
},
authors:[Number],
language:{
    type: String,
    required: true
},
numOfPage:{
    type: Number,
    required: true
},
category:[String],
publication: [Number],
});

//create a book model
const BookModel=mongoose.model("books",BookSchema);

//books- in atlas mongodb we have a collection name as books

module.exports=BookModel;


