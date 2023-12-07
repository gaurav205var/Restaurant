const asyncHandler = require("express-async-handler");
const Cart = require("../models/cartData");

const orders = asyncHandler(async (req, res) => {
  const order = await Cart.find();
  res.status(200).json(order);
});

module.exports = orders ;
