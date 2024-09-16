const Product = require("../models/Product");

// get products function
const getProducts = async (req, res, next) => {
  try {
    const result = await Product.find();

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({
      message: "Products nof found!",
    });
  }
};

// add product function
const addProduct = async (req, res, next) => {
  const productDetails = req.body.details.split(",");
  const newProduct = new Product({
    ...req.body,
    title: req.body.name,
    details: productDetails,
  });

  try {
    const result = await newProduct.save();

    res.status("200").json({
      message: "Product added successfully!",
    });
  } catch (error) {
    res.status("500").json({
      message: "Product wasn't add successfully!",
    });
  }
};

// add products function
const addProducts = async (req, res, next) => {
  try {
    const result = await Product.insertMany(req.body);

    res.status("200").json({
      message: "All products added successfully!",
    });
  } catch (error) {
    res.status("500").json({
      message: "All products added failed!",
    });
  }
};

// get signle product by id
const getProudctById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Product.findById({ _id: id });

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("Product not found!");
  }
};

// get single product by id pass to the query
const getProduct = async (req, res, next) => {
  const id = req.query.id;
  try {
    const product = await Product.findById({ _id: id });

    res.status(200).json({
      message: "product get success!",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Product get not found!",
    });
  }
};

module.exports = {
  getProducts,
  addProduct,
  addProducts,
  getProudctById,
  getProduct,
};
