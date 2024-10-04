// external imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const dotenv = require("dotenv");
const path = require("path");
const cookieParser = require("cookie-parser");

// internal imports
const usersRouter = require("./router/usersRouter");
const productsRouter = require("./router/productsRouter");
const orderRouter = require("./router/OrderRouter");
const cartRouter = require("./router/cartRouter");

// express app initialization
const app = express();
dotenv.config();
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const server = http.createServer(app);

// // set static folder
// app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.JWT_SECRET));

app.get("/", (req, res) => {
  res.send("I am getting something!");
});

// database connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected database!");
  })
  .catch(() => {
    console.log("Databse Connected failed!");
  });

// routing setup
app.use("/user", usersRouter);
app.use("/product", productsRouter);
app.use("/order", orderRouter);
app.use("/cart", cartRouter);

// server listen
server.listen(3000, () => {
  console.log("Server is running on Port:3000");
});
