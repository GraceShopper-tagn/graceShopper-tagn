const prisma = require("../db/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authRequired, userRequired } = require("./utils");
const authRouter = require("express").Router();

const { JWT_SECRET, COOKIE_SECRET, SALT_ROUNDS } = process.env;
// const SALT_ROUNDS = 10;

// first name, lastname, email, username, password
authRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password, firstname, lastname, email } = req.body;
    // console.log("COOKIE_SECRET", process.env);
    const hashedPassword = await bcrypt.hash(password, +SALT_ROUNDS);
    const user = await prisma.users.create({
      data: {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: hashedPassword,
      },
    });
    console.log("user", user);
    delete user.password;

    const token = jwt.sign(user, JWT_SECRET);

    res.cookie("token", token, {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
      secret: COOKIE_SECRET,
    });

    delete user.password;

    res.send({ user });
  } catch (error) {
    next(error);
  }
});

authRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log({ username, password });
    const user = await prisma.users.findUnique({
      where: { username: username },
    });
    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
      const token = jwt.sign(user, JWT_SECRET);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
        secret: COOKIE_SECRET,
      });
      console.log("token", token);
      delete user.password;
      console.log("USER", user);

      // console.log("process.env.SAVED_USER", process.env.SAVED_USER);
      // console.log("equals", process.env.SAVED_USER === user);
      // console.log(JSON.stringify(process.env.SAVED_USER));
      res.send({ user });
      // res.send(process.env.SAVED_USER);
    }
  } catch (error) {
    next(error);
  }
});

authRouter.post("/login/alt", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log({ email, password });
    const user = await prisma.users.findUnique({
      where: { email: email },
    });
    console.log(user);
    const validPassword = await bcrypt.compare(email, user.password);

    if (validPassword) {
      const token = jwt.sign(user, JWT_SECRET);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      delete user.password;
      process.env.SAVED_USER = user;
      res.send({ user });
    }
  } catch (error) {
    next(error);
  }
});

authRouter.post("/logout", async (req, res, next) => {
  try {
    res.clearCookie("token", {
      sameSite: "strict",
      httpOnly: true,
      signed: true,
    });
    res.send({
      loggedIn: false,
      message: "You have logged out",
    });
  } catch (error) {
    next(error);
  }
});

// Example of how to use authorization middleware

authRouter.get(`/:id`, userRequired, authRequired, async (req, res, next) => {
  const { id } = req.params;
  // const id = 1;
  try {
    const user = await prisma.users.findUnique({
      where: {
        id: +id,
      },
    });
    console.log(user);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = authRouter;
