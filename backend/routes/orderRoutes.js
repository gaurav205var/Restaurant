const express = require("express");
const router = express.Router();
const orders = require("../controllers/orderController");

router.get("/", orders);

module.exports = router;
