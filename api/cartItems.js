const cartItemsRouter = require("express").Router();
const prisma = require("../db/prisma");

cartItemsRouter.post("/", async (req, res, next) => {
  try {
    const { orderid, productid } = req.body;
    const cartItem = await prisma.cartitems.create({
      data: {
        orderid,
        productid,
      },
    });
    res.send(cartItem);
  } catch (error) {
    next(error);
  }
});

module.exports = cartItemsRouter;
