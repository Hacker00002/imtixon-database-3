const model = require("./product.mode");

module.exports = {
    // CREATE PRODUCT
    // ////////////////////////////////////////////////////////////////
    CREATE_PRODUCT: async (req, res) => {
        const { product_img, product_price, product_title, product_sub_title } =
            req.body;

        try {
            await model.createProduct(
                product_img,
                product_price,
                product_title,
                product_sub_title
            );

            res.status(201).json({
                message: "Succesfully created",
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
    // SEARCH BY TITLE
    // ////////////////////////////////////////////////////////////////
    SEARCH_BY_TITLE: async (req, res) => {
        const { product_title } = req.query;

        try {
            const data = await model.serachByTitle(product_title);

            res.status(201).json({
                data: data,
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
    // UPDATE PRODUCT
    // ////////////////////////////////////////////////////////////////
    UPDATE_PRODUCT: async (req, res) => {
        const { product_img, product_price, product_title, product_sub_title } =
            req.body;

        const { id } = req.params;

        try {
            await model.updateProducts(
                product_img,
                product_price,
                product_title,
                product_sub_title,
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
    //GET ALL PRODUCTS
    // ////////////////////////////////////////////////////////////////
    GET_ALL_PRODUCTS: async (_, res) => {
        try {
            const products = await model.getAllProducts();

            res.status(201).json({
                data: products,
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
    // GET ALL CATEGORY
    // ////////////////////////////////////////////////////////////////
    GET_CATEGORY: async (_, res) => {
        try {
            const products = await model.getCategory();

            res.status(201).json({
                data: products,
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
    //GET ALL SUB CATEGORY
    // ////////////////////////////////////////////////////////////////
    GET_SUB_CATEGORY: async (_, res) => {
        try {
            const products = await model.getSubCategory();

            res.status(201).json({
                data: products,
            });
        } catch (error) {
            res.status(error).json({ message: error.message });
        }
    },
};
