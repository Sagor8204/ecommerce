const Product = require("../models/Product");

// get products function
const getProducts = async (req, res, next) => {
  try {
    if (Object.keys(req.query).length === 0) {
      const result = await Product.find();

      res.status(200).json(result);
    } else {
      const { minPrice, maxPrice, category, brand, size, color } = req.query;

      // create an empty filter object
      const filter = {};

      // if minPrice and maxPrice are provided , add price filter
      if (minPrice || maxPrice) {
        filter.price = {};
        if (minPrice) filter.price.$gte = parseFloat(minPrice);
        if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
      }

      // add category filter if provided
      if (category) {
        filter.category = category;
      }

      // add brand filter if provided
      if (brand) {
        filter.brand = brand;
      }

      // add size filter if provided
      if (size) {
        filter.size = size;
      }

      // add color filter if provided
      if (color) {
        filter.color = color;
      }

      // Query the databse with the filter object
      const products = await Product.find(filter);

      res.status(200).json(products);
    }
  } catch (error) {
    res.status(500).json({
      message: "Products not found!",
    });
  }
};

// add product function
const addProduct = async (req, res, next) => {
  const newProduct = new Product({
    ...req.body,
  });

  try {
    const result = await newProduct.save();

    res.status(200).json({
      message: "Product added successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Product wasn't add successfully!",
    });
  }
};

// add products function
const addProducts = async (req, res, next) => {
  try {
    const result = await Product.insertMany(req.body);

    res.status(200).json({
      message: "All products added successfully!",
    });
  } catch (error) {
    res.status(500).json({
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
