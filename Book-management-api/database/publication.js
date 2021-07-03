const mongoose=require("mongoose");

//create Publication schema

const PublicationSchema=mongoose.Schema({
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

const PublicationModel=mongoose.model("publications",PublicationSchema);

//publications- in atlas mongodb we have a collection name as publications

module.exports=PublicationModel;

