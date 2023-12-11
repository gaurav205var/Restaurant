const express = require('express');
const router = express.Router();
const {getMenu,store,deleteMenu} = require("../controllers/menuController");
const validateToken = require("../middleware/validateTokenHandler");

router.get("/",getMenu);
// router.route("/").get(getMenu);

// //public access for storing data
// router.route("/").post(store);

//private access
router.post("/",validateToken,store);

router.route("/:id").delete(deleteMenu);

module.exports = router;