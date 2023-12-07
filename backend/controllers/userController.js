const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


//Register the user
//@route POST/api/users/register
const registerUser = asyncHandler(async (req, res) => {
  console.log("body request", req.body);
  const { username, email, password } = req.body;
  console.log("after req body", username, email, password);

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All the fields are mandatory for SignUp!");
  }

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered");
  }

  //Hash Password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password", hashedPassword);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log("user created successfully", user);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  // res.json({ message: "Register the user" });
});

//Login the user
//@route POST/api/users/login
const loginUser = asyncHandler(async (req, res) => {
  console.log("loginbody", req.body);
  const { email, password } = req.body;
  console.log("after destructuring", email, password);
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are manadatory for Login!");
  }
  const user = await User.findOne({ email });
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );
    res.status(200).json({ accessToken });
    console.log("token",accessToken);
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});

//Current user info
//@access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

//add


module.exports = { registerUser, loginUser, currentUser };
