const Joi = require("joi");

module.exports = Joi.object({
    user_email: Joi.string().required(),
    user_password: Joi.string().required(),
}).required();
