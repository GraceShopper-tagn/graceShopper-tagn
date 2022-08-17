const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

// Checks that any user is logged in

const userRequired = (req, res, next) => {
  if (!req.signedCookies.token) {
    res.status(401).send({
      loggedIn: false,
      message: "You must be logged in to perform this action",
    });
    return;
  }
  next();
};

// Checks that a specific user is logged in

const authRequired = (req, res, next) => {
  // attach the user to req.user
  const token = req.signedCookies.token;
  try {
    const { id } = req.params;
    const user = jwt.verify(token, JWT_SECRET);
    if (+user.id !== +id) throw error;
    // req.user = user
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: "You are not authorized to perform this action",
    });
    return;
  }
  next();
};

//checks that a specific user is an admin

const adminRequired = (req, res, next) => {
  const token = req.signedCookies.token;
  try {
    const { id } = req.params;
    const user = jwt.verify(token, JWT_SECRET);
    if (user.isadmin === false) throw error;
  } catch (error) {
    res.status(401).send({
      loggedIn: false,
      message: "You are not authorized to perform this action",
    });
    return;
  }
  next();
};

const adminReq = (req, res, next) => {
  try {
    if (req.user.isadmin) {
      next();
    }
  } catch (error) {
    next({
      message: "You are not auth",
    });
  }
};

module.exports = { authRequired, userRequired, adminRequired };
