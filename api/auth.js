const prisma = require("../db/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userRequired, adminRequired } = require("./utils");
const authRouter = require("express").Router();

const { JWT_SECRET, COOKIE_SECRET } = process.env;
const SALT_ROUNDS = 10;

// first name, lastname, email, username, password
authRouter.post("/register", async (req, res, next) => {
  try {
    const { username, password, firstname, lastname, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
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
    });

    delete user.password;
    req.user = user;
    console.log("req.user", req.user);

    res.send({ user });
  } catch (error) {
    next(error);
  }
});

// Consolidate login and login/alt
authRouter.post("/login", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    let user;
    if (username) {
      user = await prisma.users.findUnique({
        where: {
          username,
        },
      });
    } else if (email) {
      user = await prisma.users.findUnique({
        where: {
          email: email,
        },
      });
    }

    if (user === null) {
      res.send({
        loggedIn: false,
        message: `Invalid username or email, please try again.`,
      });
    }

    let validPassword;
    try {
      validPassword = await bcrypt.compare(password, user.password);
    } catch (error) {
      next(error);
    }

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
    req.user = null;

    res.send({
      loggedIn: false,
      message: "You have logged out",
    });
  } catch (error) {
    next(error);
  }
});

// Example of how to use authorization middleware

authRouter.get(`/:id`, userRequired, adminRequired, async (req, res, next) => {
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
