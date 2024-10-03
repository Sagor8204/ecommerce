const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
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
    subCategory: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: [String],
      required: true,
    },
    productIdentifires: {
      sku: { type: String },
      upc: { type: String },
      ean: { type: String },
      isbn: { type: String },
    },
    productKeyFeatures: {
      type: [String],
    },
    additionalProductFeatures: {
      type: [String],
    },
    shippingDetails: {
      weight: {
        type: Number,
      },
      dimensions: {
        length: Number,
        width: Number,
        height: Number,
      },
    },
    ratings: {
      averageRating: {
        type: Number,
        default: 0,
      },
      reviewsCount: {
        type: Number,
        default: 0,
      },
    },
    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "People" },
        rating: { type: Number, required: true },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
    availabilityStatus: {
      type: String,
      enum: ["In Stock", "Out of Stock", "Limited Stock", "Preorder"],
      default: "In Stock",
    },
    colors: {
      type: [String],
    },
    sizes: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
