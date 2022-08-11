const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require(process.env);

const authRequired = (req, res, next) => {
  const token = req.signedCookies.token;
  console.log("cookie secret", token);
  try {
    jwt.verify(token, JWT_SECRET);
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: "You must be logged in to perform this action",
    });
    return;
  }
  next();
};

module.exports = { authRequired };
