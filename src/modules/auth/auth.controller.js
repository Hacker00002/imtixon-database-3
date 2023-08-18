const { sign } = require("../../helpers");
const model = require("./auth.model");

module.exports = {
    // SIGN UP
    // ////////////////////////////////////////////////////////////////
    SIGN_UP: async (req, res) => {
        try {
            const {
                user_email,
                user_username,
                user_password,
                user_lastname,
                user_phonenumber,
            } = req.body;

            const user = await model.userRetriew(user_email);

            if (user?.length) {
                return res
                    .status(404)
                    .json({ message: "User already exists", status: 404 });
            }

            const [data] = await model.createNewUser(
                user_email,
                user_username,
                user_password,
                user_lastname,
                user_phonenumber
            );

            res.status(201).json({
                accessToken: sign({ id: data.id }),
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
    //SIGN IN
    // ////////////////////////////////////////////////////////////////
    SIGN_IN: async (req, res) => {
        const { user_email } = req.body;

        try {
            const user = await model.userRetriew(user_email);

            if (!user.length) {
                return res
                    .status(404)
                    .json({ message: "User not found", status: 404 });
            }

            res.status(201).json({
                accessToken: sign({ id: user.id }),
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
    //GET ALL USER
    // ////////////////////////////////////////////////////////////////
    GET_ALL_USERS: async (_, res) => {
        try {
            const user = await model.getAllusers();

            res.status(201).json({
                data: user,
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
    //USER_ACCOUNT
    // ////////////////////////////////////////////////////////////////
    USER_ACCOUNT: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await model.getAccountUser(id);

            if (id != req.body.id) {
                return res.json({
                    status: 401,
                    message: "Sorry token does not match",
                });
            }

            res.status(201).json({
                data: user,
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
    //UPDATE ACCOUNT
    // ////////////////////////////////////////////////////////////////
    UPDATE_ACCOUNT: async (req, res) => {
        const { id } = req.params;
        const {
            user_email,
            user_username,
            user_password,
            user_lastname,
            user_phonenumber,
        } = req.body;

        if (id != req.body.id) {
            return res.json({
                status: 401,
                message: "Sorry token does not match",
            });
        }

        try {
            await model.updateAccount(
                user_email,
                user_username,
                user_password,
                user_lastname,
                user_phonenumber,
                id
            );

            await model.updateDate(id);

            res.status(201).json({
                message: "succesfully updated",
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
};
