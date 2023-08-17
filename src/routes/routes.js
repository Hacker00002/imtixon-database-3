const { Router } = require("express");
const { auth, product } = require("../modules");

const routes = Router();

routes.use(auth.routes);
routes.use(product.routes);

module.exports = {
    routes,
};
