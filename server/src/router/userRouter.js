const express = require('express');
const  getUser  = require('../controller/userController');
const userRouter = express.Router();


userRouter.get('/', getUser);

module.exports = userRouter;
