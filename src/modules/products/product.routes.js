const { Router } = require("express");
const ProductsController = require("./product.controller");

const productRoutes = Router();

productRoutes
    //POST
    .post("/product/create", ProductsController.CREATE_PRODUCT)
    .patch("/product/update/:id", ProductsController.UPDATE_PRODUCT)
    // GET
    .get("/product/search", ProductsController.SEARCH_BY_TITLE)
    .get("/product/all-products", ProductsController.GET_ALL_PRODUCTS);

module.exports = productRoutes;
