const express = require("express");
const {
  getCart,
  addCart,
  deleteCartById,
  getAllCarts,
  addQuantityInCart,
  decrementQuantityInCart,
} = require("../controller/cartController");

const router = express.Router();

const { isAuthenticate } = require("../middlewares/authenticate");

router.get("/all", isAuthenticate, getAllCarts);
router.get("/", isAuthenticate, getCart);
router.post("/", isAuthenticate, addCart);
router.patch("/add-quantity", isAuthenticate, addQuantityInCart);
router.patch("/minus-quantity", isAuthenticate, decrementQuantityInCart);
router.delete("/delete", isAuthenticate, deleteCartById);

module.exports = router;
