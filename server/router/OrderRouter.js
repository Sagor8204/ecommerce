const express = require("express");
const {
  getOrder,
  getOrders,
  createOrder,
  delteOrderById,
} = require("../controller/orderController");

const { isAuthenticate } = require("../middlewares/authenticate");

const router = express.Router();

router.get("/all", getOrders);
router.get("/:id", getOrder);
router.post("/", isAuthenticate, createOrder);
router.delete("/:id", delteOrderById);

module.exports = router;
