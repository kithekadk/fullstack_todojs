const { Router } = require("express");
const { registerUser, loginUser } = require("../controller/authController");

const userRouter = Router();

userRouter.post('/createuser', registerUser)
userRouter.post('/login', loginUser)

module.exports = {userRouter}; 