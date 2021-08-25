import joi from "joi";

export const ValidateOrderId = (resId) =>{
    const Schema = joi.object({
        _id: joi.string().required()
    });

    return Schema.validateAsync(resId);
};

export const ValidateOrderDetails = (orderDetails) =>{
    const Schema = joi.object({
        food: joi.string(),
        quantity: joi.number().required().min(1),
        paymode: joi.string().required(),
        status: joi.string().default("Placed"),
        paymentDetails: joi.object({
            itemTotal: joi.number().min(1),
            promo: joi.number().required(),
            tax: joi.number().required()
        })
    });

    return Schema.validateAsync(orderDetails);
};
