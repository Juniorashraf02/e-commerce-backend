const user = require("../models/UserModel");


const getUser = (req, res, next) => {
    try {
        res.status(200).send({
            message: "user api is working fine",
            user: user
        });
    } catch (error) {
        next(error)
    }
}

module.exports = getUser;