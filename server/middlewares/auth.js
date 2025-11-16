import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;
  // console.log({ token });
  if (!token) {
    return res.json({ success: false, message: "Not Authorized, Login Again" });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(tokenDecode.id);
    if (tokenDecode.id) {
      req.userId = tokenDecode.id;
      // console.log("User Authorized", req.userId);
    } else {
      return res.json({
        success: false,
        message: "Not Authorized, Login Again",
      });
    }
    //ok bro if everything is fine call next to proceed to next middleware/controller that is  userCredits controller method
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
