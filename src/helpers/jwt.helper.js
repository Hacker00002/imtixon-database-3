const jwt = require("jsonwebtoken");

const sign = (payload) =>
    jwt.sign(payload, "1Q2W3E4R", {
        expiresIn: "5h",
    });

module.exports = {
    sign,
};
