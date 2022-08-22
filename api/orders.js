const prisma = require("../db/prisma");
const { userRequired, adminRequired, getUser } = require("./utils");
const orderRouter = require("express").Router();

// Returns all orders if user is admin, only that user's orders if not.
orderRouter.get("/", userRequired, async (req, res, next) => {
  try {
    const orders = await prisma.orders.findMany({
      include: {
        discounts: true,
        users: true,
        cartitems: {
          include: {
            productsizes: {
              include: {
                products: {
                  include: {
                    producttags: {
                      include: { tags: true },
                    },
                    productphotos: {
                      include: {
                        photos: true,
                      },
                    },
                  },
                },
                sizes: true,
              },
            },
          },
        },
      },
    });
    if (req.user.isadmin) {
      res.send(orders);
    } else {
      const ordersToSend = orders.filter(
        (order) => order.userid === req.user.id
      );
      res.send(ordersToSend);
    }
  } catch (error) {
    next(error);
  }
});

orderRouter.get("/cart", getUser, async (req, res, next) => {
  try {
    if (req.user) {
      const orders = await prisma.orders.findMany({
        where: {
          userid: req.user.id,
        },
        include: {
          discounts: true,
          users: true,
          cartitems: {
            include: {
              productsizes: {
                include: {
                  products: {
                    include: {
                      producttags: {
                        include: { tags: true },
                      },
                      productphotos: {
                        include: {
                          photos: true,
                        },
                      },
                    },
                  },
                  sizes: true,
                },
              },
            },
          },
        },
      });
      const ordersToSend = orders.filter((order) => !order.fulfilled);
      res.send(ordersToSend[0]);
    }
  } catch (error) {
    next(error);
  }
});

orderRouter.get("/fulfilled", userRequired, async (req, res, next) => {
  try {
    const orders = await prisma.orders.findMany({
      where: {
        userid: req.user.id,
      },
      include: {
        discounts: true,
        users: true,
        cartitems: {
          include: {
            productsizes: {
              include: {
                products: {
                  include: {
                    producttags: {
                      include: { tags: true },
                    },
                    productphotos: {
                      include: {
                        photos: true,
                      },
                    },
                  },
                },
                sizes: true,
              },
            },
          },
        },
      },
    });
    const ordersToSend = orders.filter((order) => order.fulfilled);
    res.send(ordersToSend);
  } catch (error) {
    next(error);
  }
});

orderRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await prisma.orders.findUnique({
      where: {
        id: +id,
      },
      include: {
        discounts: true,
        users: true,
        cartitems: true,
      },
    });
    res.send(order);
  } catch (error) {
    next(error);
  }
});

orderRouter.patch("/:id", userRequired, async (req, res, next) => {
  const { id } = req.params;
  const {
    billingaddress,
    shippingaddress,
    paymentinfo,
    fulfilled,
    subtotal,
    tax,
    total,
    discountid,
    orderdate,
    userid,
  } = req.body;
  try {
    if ((req.user.id === userid) | req.user.isadmin) {
      const updatedOrder = await prisma.orders.update({
        where: {
          id: +id,
        },
        data: {
          billingaddress: billingaddress ? billingaddress : undefined,
          shippingaddress: shippingaddress ? shippingaddress : undefined,
          paymentinfo: paymentinfo ? paymentinfo : undefined,
          fulfilled: fulfilled,
          subtotal: subtotal ? subtotal : undefined,
          tax: tax ? tax : undefined,
          total: total ? total : undefined,
          discountid: discountid ? discountid : undefined,
          orderdate: orderdate ? orderdate : undefined,
        },
      });
      res.send({ updatedOrder });
    } else res.send("You cannot update somebody else's order");
  } catch (error) {
    next(error);
  }
});

orderRouter.patch("/:id/claim", async (req, res, next) => {
  const { id } = req.params;
  const { userid, billingaddress, shippingaddress, paymentinfo } = req.body;
  try {
    const updatedOrder = await prisma.orders.update({
      where: {
        id: +id,
      },
      data: {
        billingaddress: billingaddress ? billingaddress : undefined,
        shippingaddress: shippingaddress ? shippingaddress : undefined,
        paymentinfo: paymentinfo ? paymentinfo : undefined,
        userid: userid,
      },
    });
    res.send(updatedOrder);
  } catch (error) {
    next(error);
  }
});

// orderRouter.patch("/:id/seed", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const { quantity, price } = req.body;
//     const order = await prisma.orders.update({
//       where: {
//         id: +id,
//       },
//       data: {
//         subtotal: { increment: +(quantity * price) },
//         tax: { increment: +(quantity * price) * 0.07 },
//         total: { increment: +(quantity * price) * 1.07 },
//       },
//     });
//     updateOrderSubtotal(cartItem.orderid, productprice);

//     res.send(cartItem);
//   } catch (error) {
//     next(error);
//   }
// });

// Create Order

orderRouter.post("/", async (req, res, next) => {
  try {
    const { billingaddress, shippingaddress, paymentinfo, discountid, userid } =
      req.body;
    const newOrder = await prisma.orders.create({
      data: {
        billingaddress: billingaddress ? billingaddress : undefined,
        shippingaddress: shippingaddress ? shippingaddress : undefined,
        paymentinfo: paymentinfo ? paymentinfo : undefined,
        discountid: discountid ? discountid : undefined,
        userid: userid ? userid : undefined,
      },
    });
    res.send(newOrder);
  } catch (error) {
    next(error);
  }
});

module.exports = orderRouter;
