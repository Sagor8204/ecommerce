import React, { useState } from "react";
import ZoomImage from "./ZoomImage";
import ProductRating from "../Shop/Ratings";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import axiosSource from "../Axios/axios";
import { useAuth } from "../../contexts/AuthContext";
import { Link, Navigate, useParams } from "react-router-dom";

const ProductInfo = ({ product }) => {
  const { user, setMessage } = useAuth();
  const { id } = useParams();
  const [pQuantity, setPQuantity] = useState(1);

  const quantityDecrement = () => {
    if (pQuantity > 1) {
      setPQuantity(pQuantity - 1);
    }
  };

  const quantityIncrement = () => {
    setPQuantity(pQuantity + 1);
  };

  // add to cart
  const handleAddtoCart = () => {
    if (user) {
      axiosSource
        .post("/cart", { productId: id, quantity: pQuantity })
        .then((res) => {
          if (res.data.items) {
            setMessage("Cart added success");
          }
        })
        .catch((err) => {
          setMessage("Cart add not success!");
        });
    } else {
      setMessage("Please loign!");
    }
  };

  return (
    <div className="flex gap-9 w-[870px]">
      {/* product image */}
      <div className="w-1/2">
        <ZoomImage ImageUrl={product?.image} alt="product_image" />
      </div>

      {/* product information */}
      <div className="w-1/2">
        <h2 className="text-2xl font-normal">{product?.title}</h2>
        <h3 className="py-1 text-[15px]">
          <span className="text-gray-500 font-medium mr-2">Brand:</span>
          {product?.brand}
        </h3>
        <p className="text-2xl font-normal text-red-500 -mt-3 mb-1">
          <span className="font-bold text-4xl">৳</span> {product?.price}
        </p>
        <ProductRating rating={product?.rating} />
        <div className="py-1 text-[15px]">
          <span className="text-gray-500 font-medium mr-2">Color Family</span>{" "}
          <span>Black</span>
        </div>
        <div className="py-2 flex items-center">
          <label className="font-medium text-gray-500 mr-2" htmlFor="quantity">
            Quantity:
          </label>
          <div className="flex items-center">
            <FaMinus
              className="cursor-pointer text-[16px] p-[2px]"
              onClick={quantityDecrement}
            />
            <input
              className="quantity_input outline-none w-10 text-center font-medium"
              type="number"
              value={pQuantity}
              onChange={(e) => setPQuantity(e.target.value)}
              min="1"
            />
            <FaPlus
              className="cursor-pointer text-[16px] p-[2px]"
              onClick={quantityIncrement}
            />
          </div>
        </div>

        <div className="flex gap-5 mt-3">
          <Link to={"/order"}>
            <button className="border border-blue-500 rounded-md px-10 py-3 font-medium text-[15px] transition-all duration-300 hover:bg-blue-500 hover:text-white">
              Buy Now
            </button>
          </Link>
          <button
            onClick={handleAddtoCart}
            className="border border-blue-500 rounded-md px-10 py-3 font-medium text-[15px] transition-all duration-300 hover:bg-blue-500 hover:text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
