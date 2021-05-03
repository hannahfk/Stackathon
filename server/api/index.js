const router = require("express").Router();
module.exports = router;

router.use("/admin", require("./admin"));

router.use("/users", require("./users"));
router.use("/orders", require("./orders"));
router.use("/products", require("./products"));
router.use("/order_products", require("./order_products"));
router.use("/cart", require("./cart"));
router.use("/order_history", require("./order_history"));
router.use("/checkout", require("./checkout"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
