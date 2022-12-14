const prisma = require("../db/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userRequired, authRequired } = require("./utils");
const usersRouter = require("express").Router();

usersRouter.get("/me", userRequired, (req, res, next) => {
  try {
    const user = req.user;
    res.send({ user });
  } catch (error) {
    next(error);
  }
});

// usersRouter.get("/me/orders", userRequired, (req, res, next) => {

//   try {
//       const { id } = req.user.id;

//     const order = await prisma.orders.findMany({
//       where: {
//         userid: +id,
//       },
//       include: {
//         discounts: true,
//         users: true,
//         cartitems: true,
//       },
//     });
//     res.send(order);
//   } catch (error) {
//     next(error);
//   }
// });

usersRouter.patch("/me", userRequired, async (req, res, next) => {
  try {
    const user = req.user;
    const id = user.id;
    const {
      firstname,
      lastname,
      username,
      email,
      shippingaddress,
      billingaddress,
      paymentinfo,
      isadmin,
      password,
    } = req.body;
    const updatedUser = await prisma.users.update({
      where: {
        id,
      },
      data: {
        firstname: firstname ? firstname : user.firstname,
        lastname: lastname ? lastname : user.lastname,
        password: password ? password : user.password,
        username: username ? username : user.username,
        email: email ? email : user.email,
        shippingaddress: shippingaddress
          ? shippingaddress
          : user.shippingaddress,
        billingaddress: billingaddress ? billingaddress : user.billingaddress,
        paymentinfo: paymentinfo ? paymentinfo : user.paymentinfo,
        isadmin: isadmin ? isadmin : user.isadmin,
      },
    });
    res.send({ updatedUser });
  } catch (error) {
    next(error);
  }
});

module.exports = usersRouter;
