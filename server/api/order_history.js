const {
  models: { Order, Product, Order_Product },
} = require("../db");
const { requireToken, isLoggedInUser } = require('./gatekeepingMiddleware')
const router = require("express").Router();

router.get("/:userId",  async (req, res, next) => {
  try {
    const orderHistory = await Order.findAll({
      where: {
        userId: req.params.userId,
        isFulfilled: true,
      },
      include: {
        model: Product,
      },
    });
    res.send(orderHistory);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
