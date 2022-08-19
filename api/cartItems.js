const cartItemsRouter = require("express").Router();
const prisma = require("../db/prisma");

cartItemsRouter.post("/", async (req, res, next) => {
  try {
    const { orderid, productsizeid } = req.body;
    const cartItem = await prisma.cartitems.create({
      data: {
        orderid,
        productsizeid,
      },
    });
    res.send(cartItem);
  } catch (error) {
    next(error);
  }
});

// cartItemsRouter.patch("/increment", async (req, res, next) => {
//   try {
//     const { orderid, productid } = req.body;
//     const cartItem = await prisma.cartitems.update({
//       where: {
//         orderid: +orderid,
//         // productid: +productid,
//       },
//       data: {
//         quantity: { increment: 1 },
//       },
//     });
//     res.send(cartItem);
//   } catch (error) {
//     next(error);
//   }
// });

module.exports = cartItemsRouter;
