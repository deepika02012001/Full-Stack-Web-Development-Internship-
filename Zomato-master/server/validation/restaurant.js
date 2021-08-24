import joi from "joi";

export const ValidateRestaurantObject = (restaurantObj)=>{
    const Schema = joi.object({
        name: joi.string().required(),
        city: joi.string().required(),
        address: joi.string().required(),
        mapLocation: joi.string().required(),
        cuisine: joi.array().items(joi.string()),
        restaurantTimings: joi.string(),
        contactNumber: joi.number(),
        website: joi.string(),
        popularDishes: joi.array().items(joi.string()),
        averageCost: joi.number(),
        amenities: joi.array().items(joi.string()),
        menuImages: joi.string(),
        menu: joi.string(),
        reviews: joi.string(),
        photos: joi.string()
    });

    return Schema.validateAsync(restaurantObj);
};

export const ValidateRestaurantCity = (restaurantCity)=>{
    const Schema = joi.object({
        city: joi.string().required()
    });

    return Schema.validateAsync(restaurantCity);
};

export const ValidateRestaurantId = (resId)=>{
    const Schema = joi.object({
        _id: joi.string().required()
    });

    return Schema.validateAsync(resId);
};

export const ValidateRestaurantSearchString = (restaurantSearch)=>{
    const Schema = joi.object({
        searchString: joi.string().required()
    });

    return Schema.validateAsync(restaurantSearch);
};

