const model = require("./order.model");

module.exports = {
    // CREATE ORDER
    // ////////////////////////////////////////////////////////////////
    CREATE_ORDER: async (req, res) => {
        const { product_id } = req.body;
        const { id } = req.params;
        try {
            await model.createOrder(id, product_id);

            res.status(201).json({
                message: "Succesfully order",
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
    // GET ALL ORDERS
    // ////////////////////////////////////////////////////////////////
    GET_USER_ORDERS: async (req, res) => {
        const { id } = req.params;
        try {
            const products = await model.getUserOrder(id);

            res.status(201).json({
                data: products,
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
    // GET USER ORDER COUNT
    // ////////////////////////////////////////////////////////////////
    GET_USER_ORDER_COUNT: async (req, res) => {
        const { id } = req.params;
        try {
            const count = await model.getUserOrderCount(id);

            res.status(201).json({
                data: count,
                message: "User ordered so many things online",
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
};
