const router = require("express").Router();
const {
  models: { Order_Product, Product, Order },
} = require("../db");

router.post("/createOrder", async (req, res, next) => {
  try {
    const newOrder = await Order.create({ 
      userId: 1,
    buyerEmail:'iris.shi@tableau.com',
    totalAmount:9999 });

    // const newProduct = await Product.findByPk(req.body.id);

    const assignedOrder = await Order_Product.create(
      {
        quantity:Math.floor(Math.random()*100/4),
        productId:4,
        orderId:3
      }
      
    );

    console.log("here ===>", newOrder.__proto__);
    res.send(assignedOrder);
  } catch (err) {
    next(err);
  }
});

router.get("/createOrder", async (req, res, next) => {
  try {
    res.send('hi');
  } catch (err) {
    next(err);
  }
});


// let date = new Date()

// router.get("/", async (req, res, next) => {
//   try {
//     // let orderProducts = await Order_Product.findAll();
//     const newOrder = await Order.findByPk(1)
//     const newProduct = await Product.create({
//       name:'honeybee12',
//       description:'hi',
//       image:'http://cdn.shopify.com/s/files/1/1061/1924/products/Money_Bag_Emoji_grande.png?v=1571606064',
//       price:10.0,
//       date:'1/1/1999',
//       time: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
//     })

//     const product = await Product.findByPk(1)
//     const test = [product]
//     console.log('order ==', Object.keys(product.__proto__))

//     const data = await product.createOrder(newOrder)
//     res.send(newOrder)
//   } catch (err) {
//     next(err);
//   }
// });

// user submit shopping cart ---> req.body
// req.body is a [{productId,qty}, {productId,qty}] ?
// req.body ---> array method / loop  ---> call findByPk & setProducts

// router.get("/", async (req, res, next) => {
//   try {
//     // let orderProducts = await Order_Product.findAll();
//     // res.send(orderProducts);
//   } catch (err) {
//     next(err);
//   }
// });

// router.get("/:id", async (req, res, next) => {
//   try {
//     const allProducts = await Order_Product.findAll({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send(allProducts);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     // create new Order

//     const createOrderProduct = Order_Product.create(req.body);
//     const newOrder = Order.create();
//     res.send(createOrderProduct);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     // create new Order
//     // const products = req.body;
//     // let products = [{ productId: 1, quantity: 10 }];
//     const orders = [
//       { productId: 1, quantity: 1 },
//       { productId: 2, quantity: 3 },
//     ];
//     const newOrder = await Order.create(orders);

//     // await newOrder.setProducts(products);
//     console.log("newOrder __proto__==>", newOrder.__proto__);
//     console.log("newOrder prototype==>", newOrder.prototype);
//     console.log("newOrder obj==>", newOrder);
//     // products.map((product) => product.setOrder(newOrder));

//     res.send({ hi: 10 });
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
