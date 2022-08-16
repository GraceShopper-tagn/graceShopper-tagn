const { photos } = require("../db/prisma");
const prisma = require("../db/prisma");
const productRouter = require("express").Router();

productRouter.get("/", async (req, res, next) => {
  try {
    const products = await prisma.products.findMany({
      include: {
        producttags: {
          select: {
            tags: { select: { name: true, categoryid: true } },
          },
        },

        productphotos: { select: { photos: true } },
      },
    });
    res.send(products);
  } catch (error) {
    next(error);
  }
});

module.exports = productRouter;