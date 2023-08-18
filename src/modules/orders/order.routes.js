const { Router } = require("express");
const OrderController = require("./order.controller");

const ordersRouter = Router();

ordersRouter
    // POST ORDERS
    .post("/order/:id", OrderController.CREATE_ORDER)
    // GET ORDERS
    .get("/order/user/:id", OrderController.GET_USER_ORDERS)
    .get("/order-count/:id", OrderController.GET_USER_ORDER_COUNT);
// EXPORT ROUTES
module.exports = ordersRouter;
