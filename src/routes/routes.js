const { Router } = require("express");
const { auth, product, orders } = require("../modules");

const routes = Router();

routes.use(auth.routes);
routes.use(product.routes);
routes.use(orders.routes);

module.exports = {
    routes,
};
