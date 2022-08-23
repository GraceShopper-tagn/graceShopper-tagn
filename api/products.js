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

productRouter.get("/:id/:sizeId", async (req, res, next) => {
  const { id, sizeId } = req.params;

  try {
    const getInventory = await prisma.productsizes.findMany({
      where: {
        productid: +id,
      },
      select: {
        inventory: true,
        sizeid: true,
      },
    });
    for (productSize of getInventory) {
      if (productSize.sizeid === +sizeId) {
        res.send(productSize);
      }
    }
    res.send({});
  } catch (error) {
    next(error);
  }
});

productRouter.get(
  "/:brand/:color/:activity/:gender",
  async (req, res, next) => {
    const { brand, color, activity, gender } = req.params;

    try {
      const getInventoryByTag = await prisma.products.findMany({
        where: {
          producttags: {
            every: {
              tagid: {
                in: [+brand, +color, +activity, +gender],
              },
            },
          },
        },
        include: { productphotos: { select: { photos: true } } },
      });

      res.send(getInventoryByTag);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = productRouter;
