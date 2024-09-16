const express = require("express");
const {
  getProducts,
  addProduct,
  addProducts,
  getProudctById,
  getProduct,
} = require("../controller/productsController");
const { isAuthenticate } = require("../middlewares/authenticate");

const router = express.Router();

router.get("/all", getProducts);
router.get("/all/:id", getProudctById);
// get product by id to pass by body
router.get("/", isAuthenticate, getProduct);
router.post("/", addProduct);
router.post("/many", addProducts);

module.exports = router;
