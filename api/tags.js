const tagsRouter = require("express").Router();
// const { cartitems } = require("../db/prisma");
const prisma = require("../db/prisma");

tagsRouter.get("/", async (req, res, next) => {
  try {
    const tags = await prisma.tags.findMany({
      include: {
        id: true,
        name: true,
        categoryid: true,
      },
    });
    res.send(tags);
  } catch (error) {
    next(error);
  }
});

module.exports = tagsRouter;
