const { Router } = require("express");
const AuthController = require("./auth.controller");
const { verifyAccessMiddleware } = require("../../middleware/token.middleware");

const authRoutes = Router();

authRoutes
    // POST SIGN-UP AND SIGN-IN
    .post("/sign-up", AuthController.SIGN_UP)
    .post("/sign-in", AuthController.SIGN_IN)
    .patch(
        "/account/update/:id",
        verifyAccessMiddleware,
        AuthController.UPDATE_ACCOUNT
    )
    // GET USERS AND ACCOUNT
    .get("/users", AuthController.GET_ALL_USERS)
    .get("/account/:id", verifyAccessMiddleware, AuthController.USER_ACCOUNT);
// EXPORT ROUTES
module.exports = authRoutes;
