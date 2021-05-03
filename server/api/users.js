const router = require('express').Router()
const { models: { User,Order } } = require('../db')
const { requireToken, isLoggedInUser } = require('./gatekeepingMiddleware')

module.exports = router

router.get("/:id", requireToken, isLoggedInUser, async (req, res, next) => {
  try {
      const singleUser = await User.findByPk(req.params.id);
      res.json(singleUser);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", requireToken, isLoggedInUser, async (req, res, next) => {
  try {
      const user = await User.findByPk(req.params.id);
      res.send(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});

