const router = require("express").Router();
const {
  models: { Product, Order },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.send(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (err) {
    next(err);
  }
});

  
router.post('/createOrder', async (req, res, next) => {
  try {
    const newOrder = await Order.create({'userId':1})
  
    const newProduct = await Product.findByPk(req.body.id)
    
    const assignedOrder = await newOrder.addProduct(newProduct)

    console.log('here ===>', newOrder.__proto__)
    res.send(assignedOrder)

  } catch (err) {
    next(err)
  }
})


module.exports = router;
