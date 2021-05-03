const router = require("express").Router();
const { requireToken, isLoggedInUser } = require('./gatekeepingMiddleware')

const {
  models: { Order,Product },
} = require("../db");

router.put('/:userId', requireToken, async (req, res, next) => 
{
    const orders = await Order.findAll({where:{
        userId:req.params.userId,
        isFulfilled:false
    }})
    orders[0].isFulfilled = true
    await orders[0].save()

    res.send(orders[0])
}
)

module.exports = router;