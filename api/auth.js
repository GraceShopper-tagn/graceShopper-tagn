const prisma = require("../db/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authRequired, userRequired, adminRequired } = require("./utils");
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
      // secret: COOKIE_SECRET,
    });

    delete user.password;

    res.send({ user });
  } catch (error) {
    next(error);
  }
});

// Consolidate login and login/alt
authRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    console.log({ username, password });
    const user = await prisma.users.findUnique({
      where: { username: username },
    });
    console.log(user);

    if (user === null) {
      res.send({
        loggedIn: false,
        message: "Invalid user name, please try again.",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      res.send({
        loggedIn: false,
        message: "Invalid password, please try again.",
      });
    }

    if (validPassword) {
      const token = jwt.sign(user, JWT_SECRET);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
        // secret: COOKIE_SECRET,
      });
      console.log("token", token);
      delete user.password;
      console.log("USER", user);

      // console.log("process.env.SAVED_USER", process.env.SAVED_USER);
      // console.log("equals", process.env.SAVED_USER === user);
      // console.log(JSON.stringify(process.env.SAVED_USER));

      // NO NEED FOR TOKEN ON FRONT-END
      res.send({ user, token });
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
    console.log("alternate login", user);

    if (user === null) {
      res.send({
        loggedIn: false,
        message: "Invalid email, please try again.",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    console.log("VALID PASSWORD: ", validPassword);
    if (!validPassword) {
      res.send({
        loggedIn: false,
        message: "Invalid password, please try again.",
      });
    }

    if (validPassword) {
      const token = jwt.sign(user, JWT_SECRET);

      res.cookie("token", token, {
        sameSite: "strict",
        httpOnly: true,
        signed: true,
      });

      delete user.password;
      res.send({ user, token });
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

authRouter.post("/delete", adminRequired, async (req, res, next) => {
  const { email } = req.params;

  try {
    const deletedUser = await prisma.users.delete({
      where: {
        email: email,
      },
    });
    console.log(deletedUser);
    res.send(deletedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = authRouter;
