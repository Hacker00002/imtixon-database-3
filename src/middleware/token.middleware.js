const jwt = require("jsonwebtoken");

const verifyAccessMiddleware = (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.status(401).json({
            message: "Provide authorization header",
        });
    }

    jwt.verify(token, "1Q2W3E4R", async (err, decoded) => {
        if (err instanceof jwt.TokenExpiredError) {
            res.status(401).json({
                message: "Token expired",
            });
            return;
        }

        if (err instanceof jwt.JsonWebTokenError) {
            res.status(401).json({
                message: "Invalid token",
            });
            return;
        }

        req.body.id = decoded.id;
        next();
    });
};

module.exports = {
    verifyAccessMiddleware,
};
