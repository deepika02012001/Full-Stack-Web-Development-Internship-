import mongoose from "mongoose";

const RestaurantSchema=new mongoose.Schema({
    name: {type: String, required: True},
    city: {type: String, required: True},
    address: {type: String, required: True},
    mapLocation:  {type: String, required: True},
    cuisines: [String],
    restaurantTimings: String,
    contactNumber: Number,
    website: Number,
    popularDishes: [String],
    averageCost: Number,
    amenities: [String],
    menuImages: {
        type:mongoose.Types.ObjectId,
        ref:"Images"
    },
    menu:{
        type:mongoose.Types.ObjectId,
        ref:"Menus"
    },
    reviews:[{
        type:mongoose.Types.ObjectId,
        ref:"Reviews"
    }],
    photos:{
        type:mongoose.Types.ObjectId,
        ref:"Images"
    }
});

export const RestaurantModel= mongoose.model("Restaurants", RestaurantSchema);