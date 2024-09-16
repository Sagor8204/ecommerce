const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    categoryType: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    details: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    stock: {
      type: String,
      default: "In Stock",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
