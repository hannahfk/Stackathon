const Sequelize = require("sequelize");
const db = require("../db");

const Order_Product = db.define("order_product", {
  quantity: {
    type: Sequelize.INTEGER,
    validate: { min: 0 },
    allowNull: false,
  },
});

module.exports = Order_Product;
