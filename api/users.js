const prisma = require("../db/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userRequired } = require("./utils");
const usersRouter = require("express").Router();

usersRouter.get("/me", userRequired, (req, res, next) => {
  try {
    //const { username, password, firstname, lastname, email } = req.body;
    const token = req.signedCookies.token;
    const user = jwt.verify(token, process.env.JWT_SECRET);
    res.send(req.user);
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
