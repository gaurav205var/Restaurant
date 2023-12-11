const asyncHandler = require("express-async-handler");
const Cart = require("../models/cartData");

const orders = asyncHandler(async (req, res) => {
  const UserId = req.session.user.id;
  console.log("userid in usercontroller ", UserId);
  try {
    const order = await Cart.find({ user_id: UserId }).populate("user_id");
    if (!order) {
      return res.status(404).json({ error: "Order not found for the user." });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = orders;
