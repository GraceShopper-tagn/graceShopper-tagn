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

productRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await prisma.products.findUnique({
      where: {
        id: +id,
      },
      include: {
        producttags: {
          select: {
            tags: { select: { name: true, categoryid: true } },
          },
        },
        productsizes: {
          select: {
            sizes: true,
            inventory: true,
          },
        },
        productphotos: { select: { photos: true } },
      },
    });
    res.send(product);
  } catch (error) {
    next(error);
  }
});

module.exports = productRouter;
