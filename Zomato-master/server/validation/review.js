import joi from "joi";

export const ValidateReviewData = (reviewData) =>{
    const Schema = joi.object({
        food: joi.string().required(),
        restaurant: joi.string().required(),
        user: joi.string().required(),
        ratings: joi.number().required().min(1),
        reviewText: joi.string().required(),
        isFoodReview: joi.boolean(),
        isRestaurantReview: joi.boolean(),
        photos: joi.array().items(joi.string())
    });

    return Schema.validateAsync(reviewData);
};

export const ValidateReviewId = (revId) =>{
    const Schema = joi.object({
        _id: joi.string().required()
    });

    return Schema.validateAsync(revId);
};
