const express = require("express");
const connectDb = require("./config/dbConnection");
const env = require("dotenv").config();
const session = require("express-session");
const flash = require("express-flash");
const MongoDbStrore = require("connect-mongo");
const bodyParser = require("body-parser")

//conectionToDB
connectDb();

const app = express();

//PORT
const port = process.env.PORT || 5000;

//session store
const mongoStore = MongoDbStrore.create({
  mongoUrl: process.env.CONNECTION_STRING,
  collection: "sessions",
});

//session config
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, //24 Hours
  })
);

//express flash
app.use(flash());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/menu", require("../backend/routes/menuRoutes"));
app.use("/api/users", require("../backend/routes/userRoutes"));
app.use("/api/orders", require("../backend/routes/orderRoutes"));


app.listen(port, () => {
  console.log(`this is my port ${port}`);
});
