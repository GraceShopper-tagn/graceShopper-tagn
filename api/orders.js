const prisma = require("../db/prisma");
const { userRequired, adminRequired } = require("./utils");
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

orderRouter.get("/cart", userRequired, async (req, res, next) => {
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
    const ordersToSend = orders.filter((order) => !order.fulfilled);
    res.send(ordersToSend);
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

module.exports = orderRouter;
