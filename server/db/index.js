//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/user");
const Product = require("./models/product");
const Order = require("./models/order");
const Order_Product = require("./models/order_product");
//associations could go here!
Order.belongsTo(User);
User.hasMany(Order);

Product.belongsToMany(Order, { through: Order_Product });
Order.belongsToMany(Product, { through: Order_Product });

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    Order_Product,
  },
};
