const tagsRouter = require("express").Router();
const { productphotos, photos } = require("../db/prisma");
// const { cartitems } = require("../db/prisma");
const prisma = require("../db/prisma");

tagsRouter.get("/", async (req, res, next) => {
  try {
    const tags = await prisma.tags.findMany({
      //   include: {
      //     categories: true,
      //     producttags: true,
      //   },
    });
    res.send(tags);
  } catch (error) {
    next(error);
  }
});

tagsRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const shoes = await prisma.producttags.findMany({
      where: {
        tagid: +id,
      },
      include: {
        products: true,
        // include: {
        //   productphotos: {
        //     select: { photos: true },
        //   },
        // },
      },
    });
    res.send(shoes);
  } catch (error) {
    next(error);
  }
});

module.exports = tagsRouter;
