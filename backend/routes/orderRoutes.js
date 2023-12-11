const express = require("express");
const router = express.Router();
const orders = require("../controllers/orderController");
const validateToken = require("../middleware/validateTokenHandler");

router.get("/",validateToken, orders);

module.exports = router;
