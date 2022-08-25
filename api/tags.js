const tagsRouter = require("express").Router();
const { productphotos, photos } = require("../db/prisma");
const prisma = require("../db/prisma");

tagsRouter.get("/", async (req, res, next) => {
  try {
    const tags = await prisma.tags.findMany({});
    res.send(tags);
  } catch (error) {
    next(error);
  }
});

module.exports = tagsRouter;
