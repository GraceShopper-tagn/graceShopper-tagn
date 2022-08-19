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

cartItemsRouter.patch("/increment", async (req, res, next) => {
  try {
    const { id } = req.body;
    const cartItem = await prisma.cartitems.update({
      where: {
        id: +id,
      },
      data: {
        quantity: { increment: 1 },
      },
    });
    res.send(cartItem);
  } catch (error) {
    next(error);
  }
});

cartItemsRouter.patch("/decrement", async (req, res, next) => {
  try {
    const { id } = req.body;
    const cartItem = await prisma.cartitems.update({
      where: {
        id: +id,
      },
      data: {
        quantity: { increment: -1 },
      },
    });
    res.send(cartItem);
  } catch (error) {
    next(error);
  }
});

cartItemsRouter.delete("/delete", async (req, res, next) => {
  try {
    const { id } = req.body;
    const cartItem = await prisma.cartitems.delete({
      where: {
        id: +id,
      },
    });
    res.send(cartItem);
  } catch (error) {
    next(error);
  }
});

module.exports = cartItemsRouter;
