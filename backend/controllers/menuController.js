const asyncHandler = require("express-async-handler");
const Menu = require("../models/menuModal");
const Cart = require("../models/cartData");

const getMenu = asyncHandler(async (req, res) => {
  const menu = await Menu.find();
  res.status(200).json(menu);
});


const store = asyncHandler(async (req, res) => {
  // console.log("The Request body id:", req.body);
  const [{ name, description, price, image }] = req.body;
  console.log("data",typeof(name));
  const cartData = await Cart.create({
    // customerId:req.user._id,
    name,
    description,
    price,
    image,
  });
  res.status(201).json(cartData);
  console.log("backend",cartData);
});

const deleteMenu = asyncHandler(async (req,res)=>{
  const menu = await Menu.findById(req.params.id);
  if(!menu){
    res.status(404);
    throw new error("Menu not found");
  }
  await Menu.deleteMany();
  res.status(200).json(menu)
});


module.exports = { getMenu, store, deleteMenu };
