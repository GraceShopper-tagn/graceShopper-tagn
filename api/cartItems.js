const cartItemsRouter = require("express").Router();
const prisma = require("../db/prisma");

cartItemsRouter.post("/", async (req, res, next) => {
  try {
    const { orderid, productsizeid, productprice } = req.body;
    const cartItem = await prisma.cartitems.create({
      data: {
        orderid: +orderid,
        productsizeid: +productsizeid,
        subtotal: +productprice,
      },
    });
    updateOrderSubtotal(orderid, productprice);
    res.send(cartItem);
  } catch (error) {
    next(error);
  }
});

cartItemsRouter.patch("/increment", async (req, res, next) => {
  try {
    const { id, productprice } = req.body;
    const cartItem = await prisma.cartitems.update({
      where: {
        id: +id,
      },
      data: {
        quantity: { increment: 1 },
        subtotal: { increment: +productprice },
      },
    });
    updateOrderSubtotal(cartItem.orderid, productprice);

    res.send(cartItem);
  } catch (error) {
    next(error);
  }
});

cartItemsRouter.patch("/decrement", async (req, res, next) => {
  try {
    const { id, productprice } = req.body;
    const cartItem = await prisma.cartitems.update({
      where: {
        id: +id,
      },
      data: {
        quantity: { increment: -1 },
        subtotal: { increment: -productprice },
      },
    });
    updateOrderSubtotal(cartItem.orderid, -productprice);
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
    updateOrderSubtotal(cartItem.orderid, -cartItem.subtotal);
    res.send(cartItem);
  } catch (error) {
    next(error);
  }
});

const updateOrderSubtotal = async (id, price) => {
  try {
    const order = await prisma.orders.update({
      where: { id: +id },
      data: {
        subtotal: { increment: price },
        tax: { increment: price * 0.07 },
        total: { increment: price * 1.07 },
      },
    });
  } catch (error) {
    next(error);
  }
};

cartItemsRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const cartItem = await prisma.cartitems.findUnique({
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
