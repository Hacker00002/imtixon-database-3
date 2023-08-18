const { Router } = require("express");
const ProductsController = require("./product.controller");

const productRoutes = Router();

productRoutes
    //POST PRODUCTS
    .post("/product/create", ProductsController.CREATE_PRODUCT)
    .patch("/product/update/:id", ProductsController.UPDATE_PRODUCT)
    // GET PRODUCTS
    .get("/product", ProductsController.SEARCH_BY_TITLE)
    .get("/product/all-products", ProductsController.GET_ALL_PRODUCTS)
    // CATEGORY
    .get("/category", ProductsController.GET_CATEGORY)
    .get("/sub-category", ProductsController.GET_SUB_CATEGORY);
// EXPORT ROUTES
module.exports = productRoutes;
