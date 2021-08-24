import mongoose from "mongoose";

const ReviewSchema= new mongoose.Schema({
    food:{type: mongoose.Types.ObjectId, ref:"Foods"},
    restaurant:{type: mongoose.Types.ObjectId, ref:"Restaurants"},
    user:{type: mongoose.Types.ObjectId, ref:"Users"},
    ratings: {type: Number, required: true},
    reviewText:{type: String, required: true},
    isFoodReview: {type: Boolean},
    isRestaurantReview: {type: Boolean},
    photos:[{
        type: mongoose.Types.ObjectId, 
        ref:"Images"
    }]
},
{
    timestamps: true
}
);

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);