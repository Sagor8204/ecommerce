const Order = require("../models/Order");

// get single order
const getOrder = async (req, res, next) => {
  try {
    const result = await Order.find({ _id: req.params.id });

    res.status("200").json(result);
  } catch (error) {
    res.status("500").send("Order Items not found!");
  }
};

// get all order
const getOrders = async (req, res, next) => {
  try {
    const result = await Order.find();

    res.status("200").json(result);
  } catch (error) {
    res.status("500").send("Order Items not found!");
  }
};

// create order
const createOrder = async (req, res, next) => {
  const {
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    shippingInfo,
    orderItems,
    paymentInfo,
  } = req.body;

  const newOrder = new Order({
    orderItems,
    shippingInfo,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  try {
    const order = await newOrder.save();

    res.status("200").send(order);
  } catch (error) {
    res.status("500").send("Product order Failed!");
  }
};

// delete order by Id
const delteOrderById = async (req, res, next) => {};

module.exports = { getOrder, getOrders, createOrder, delteOrderById };
