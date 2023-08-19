const ValidationMiddleware = (dto) => {
    return (req, res, next) => {
        const {
            user_email,
            user_username,
            user_password,
            user_lastname,
            user_phonenumber,
        } = req.body;
        const { error } = dto.validate({
            user_email,
            user_username,
            user_password,
            user_lastname,
            user_phonenumber,
        });
        if (error) {
            return res.status(400).json({
                status: 400,
                message: "Validation error",
                details: [error.details[0].message],
            });
        }
        next();
    };
};

module.exports = {
    ValidationMiddleware,
};
