const apiRouter = require("express").Router();
const cookieParser = require("cookie-parser");
require("dotenv").config();

apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    healthy: true,
  });
});

// place your routers here
apiRouter.use(cookieParser(process.env.COOKIE_SECRET));
apiRouter.use("/auth", require("./auth"));
apiRouter.use("/users", require("./users"));
apiRouter.use("/products", require("./products"));
apiRouter.use("/cartitems", require("./cartItems"));
apiRouter.use("/orders", require("./orders"));
apiRouter.use("/tags", require("./tags"));

apiRouter.get("*", (req, res, next) => {
  res.statusCode = 404;
  res.send({ message: "Uh oh, what r u looking for?" });
});

apiRouter.use((err, req, res, next) => {
  console.error(err.stack);

  if (!err.status) {
    res.status(500).send(err);
  }

  res.status(err.status).send(err.message, err.name, err.error);
});
apiRouter.use("/tags", require("./tags"));
module.exports = apiRouter;
