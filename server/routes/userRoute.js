import {
  registerUser,
  logInUser,
  userCredits,
  paymentRazorpay,
  verifyRazorpayPayment,
} from "../controllers/userController.js";
import express from "express";
import userAuth from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", logInUser);
userRouter.get("/credits", userAuth, userCredits);
userRouter.post("/pay-razor", userAuth, paymentRazorpay);
userRouter.post("/verify-razor-pay", verifyRazorpayPayment);

export default userRouter;

//localhost:4000/api/user/register
