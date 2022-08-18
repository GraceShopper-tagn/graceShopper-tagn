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
module.exports = apiRouter;
