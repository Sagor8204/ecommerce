const Cart = require("../models/Cart");
const Product = require("../models/Product");

// get all carts
const getAllCarts = async (req, res, next) => {
  try {
    const result = await Cart.find({});

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Carts not found!");
  }
};

// get cart user basics
const getCart = async (req, res, next) => {
  try {
    const result = await Cart.findOne({ user: req.user._id });

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("All cart nof found!");
  }
};

// create a cart
const addCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById({ _id: productId });
    if (!product) return res.status(404).send("Product not found!");

    if (quantity <= 0)
      return res.status(400).send("Quantity must be greater than 0");

    // find a user's cart or create new one
    let cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
      // // check if the item already exists in the cart
      const itemIndex = cart.items.findIndex(
        (item) => item.productId == productId
      );

      if (itemIndex > -1) {
        // item already exists, update the quantity
        cart.items[itemIndex].quantity += quantity;
      } else {
        // add new item  to the cart
        cart.items.push({
          productId,
          quantity,
          price: Number(product.price),
        });
      }

      // Recalculate the total price
      cart.totalPrice = cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      await cart.save();
      res.status(200).send(cart);
    } else {
      // no cart for user , crate a new cart
      const newCart = new Cart({
        user: req.user._id,
        items: [{ productId, quantity, price: Number(product.price) }],
        totalPrice: quantity * product.price,
      });

      const result = await newCart.save();
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// add qunatity to the cart of speacific product cart
const addQuantityInCart = async (req, res, next) => {
  const { productId, quantity } = req.body;

  try {
    const cart = await Cart.findOne({ user: req.user._id });
    const product = await Product.findOne({ _id: productId });
    if (!product._id) res.status(404).send("product not found!");

    if (cart) {
      const itemIndex = cart.items.findIndex(
        (item) => item.productId == productId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;

        cart.totalPrice += product.price * quantity;
        const result = await cart.save();
        res
          .status(200)
          .json({ message: "Quantity Increment success!", result });
      } else {
        res.status(404).send("Cart item not found by product id");
      }
    } else {
      res.status(404).send("Cart not found");
    }
  } catch (error) {
    res.status(500).send("Cart not found!");
  }
};

// decrement quantity to the cart of specific product cart
const decrementQuantityInCart = async (req, res, next) => {
  const { productId, quantity } = req.body;
  try {
    const product = await Product.findOne({ _id: productId });
    if (!product._id) res.status(404).send("product not found!");
    const cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
      const cartItem = cart.items.find((item) => item.productId == productId);

      if (cartItem) {
        if (cartItem.quantity > 1) {
          cartItem.quantity -= quantity;
          cart.totalPrice -= product.price * quantity;
        } else {
          // cart item remove when quantity is o
          cart.items = cart.items.filter((item) => item.productId != productId);
          cart.totalPrice -= product.price;
        }

        const result = await cart.save();
        res.status(200).json({
          message: "Quantity Decrement success!",
          result,
        });
      } else {
        res.status(404).send("Cart item not found!");
      }
    } else {
      res.status(404).send("Cart not found!");
    }
  } catch (error) {
    res.status(500).send("Server error!");
  }
};

// single cart delete by id
const deleteCartById = async (req, res, next) => {
  const { itemId } = req.body;
  try {
    const cart = await Cart.findOne({ user: req.user._id });

    if (cart) {
      cart.items = cart.items.filter((item) => item._id != itemId);
      cart.totalPrice = cart.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    }
    await cart.save();

    res.status(200).json({
      message: "Delete cart success!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete cart not success!",
    });
  }
};

module.exports = {
  getAllCarts,
  getCart,
  addCart,
  addQuantityInCart,
  decrementQuantityInCart,
  deleteCartById,
};
