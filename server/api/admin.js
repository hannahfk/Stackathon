const router = require('express').Router()
const { models: { User, Order, Product } } = require('../db')
const { requireToken, isAdmin } = require('./gatekeepingMiddleware')


router.get("/users", requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'isAdmin']
    })
    
    res.send(users)

  } catch (err) {
    next(err)
  }
})


router.get("/users/:id", requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404)
      return
    }
  } catch (err) {
    next(err);
  }
});

router.put("/users/:id", requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (user){
      await user.update(req.body)
      res.json(user)
    } else {
      res.sendStatus(404)
      return
    }
  } catch (err) {
    next(err)
  }
 } )

router.delete("/users/:id", requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (user) {
      await user.destroy()
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
      return
    }
  } catch (err) {
    next(err)
  }
})


router.get("/orders", requireToken, isAdmin, async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      include: {
        model: Product,
      }
    })
    res.json(orders)

  } catch (err) {
    next(err)
  }
})

router.get("/orders/:id", requireToken, isAdmin, async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id)
    if (order) {
      res.json(order)
    } else {
      res.sendStatus(404)
      return
    }
  } catch (err) {
    next(err)
  }
})

router.get("/products", requireToken, isAdmin, async (req, res, next) => {
  try {
    const products = await Product.findAll()
    res.json(products)
  } catch (err) {
    next(err)
  }
})

router.get("/products/:id", requireToken, isAdmin, async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.sendStatus(404)
      return
    }
  } catch (err) {
    next(err)
  }
})

router.post("/products", async (req, res, next) => {
  try {
    const product = await Product.create(req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
})

router.put("/products/:id", requireToken, isAdmin, async (req, res, next) => {
  try {
    const product= await Product.findByPk(req.params.id)
    if (product) {
      await product.update(req.body)
      res.json(product)
    } else {
      res.sendStatus(404)
      return
    }
  } catch (err) {
    next(err)
  }
})


router.delete("/products/:productId", requireToken, isAdmin, async (req, res, next) => {
  console.log('req.params',req.params)
  try {
    const product = await Product.findByPk(req.params.productId)
    
    if (product) {
      await product.destroy()
      res.sendStatus(204)
    } else {
      res.sendStatus(404)
      return
    }
  } catch (err) {
    next(err)
  }
})






module.exports = router