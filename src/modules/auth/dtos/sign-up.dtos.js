const Joi = require("joi");

module.exports = Joi.object({
    user_email: Joi.string().required().min(10),
    user_username: Joi.string().required().max(64).min(5),
    user_password: Joi.string().required().max(200).min(5),
    user_lastname: Joi.string().required().max(64).min(5),
    user_phonenumber: Joi.string().required().trim().regex(/[0-9]/).max(15),
}).required();
