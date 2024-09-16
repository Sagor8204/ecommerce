import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import axiosSource from "../Axios/axios";
import { MdDelete } from "react-icons/md";
import { fetchCart } from "../Axios/apiRequest";
import { useAuth } from "../../contexts/AuthContext";

const CartItem = ({ item }) => {
  const { setMessage } = useAuth();
  const { quantity, productId } = item;
  const [pQuantity, setPQuantity] = useState(quantity);
  const [product, setProduct] = useState({});

  useEffect(() => {
    axiosSource
      .get("/product", { params: { id: productId } })
      .then((res) => {
        if (res.data.data) {
          setProduct(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDecrement = () => {
    if (pQuantity >= 0) {
      setPQuantity(pQuantity - 1);
      axiosSource
        .patch("/cart/minus-quantity", { productId, quantity: 1 })
        .then((res) => {
          if (res.data) {
            fetchCart();
          }
        })
        .catch((err) => console.log(err.response.data));
    }
  };

  const handleIncrement = () => {
    setPQuantity(pQuantity + 1);
    axiosSource
      .patch("/cart/add-quantity", { productId, quantity: 1 })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));
  };

  const handleDeleteCart = (id) => {
    axiosSource
      .delete("/cart/delete", { data: { itemId: id } })
      .then((res) => {
        if (res.data) {
          setMessage(res.data.message);
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <div className="bg-white rounded-md my-2 py-2 px-2 flex gap-5 items-center justify-between">
      <div className="w-[54%] flex items-center gap-2">
        <img
          className="w-[70px] h-[70px] object-cover rounded-md"
          src={product?.image}
          alt="product_image"
        />
        <div>
          <h3 className="font-semibold text-[15px]">{product?.title}</h3>
          <span className="text-sm text-gray-500">
            {product?.brand ? "Brand" : "No brand"}: {product?.brand || null}
          </span>
        </div>
      </div>

      <div className="w-[16%] text-rose-500 font-semibold">
        <span className="font-bold text-2xl">৳</span> {item?.price}
      </div>
      <div className="w-[20%] flex items-center justify-center">
        <button
          onClick={handleDecrement}
          className="p-2 hover:bg-gray-300 rounded-lg"
        >
          <FaMinus className="cursor-pointer text-[13px]" />
        </button>
        <input
          className="bg-transparent outline-none w-6 text-center"
          type="text"
          value={pQuantity}
          onChange={(e) => setPQuantity(e.target.value)}
        />
        <button
          onClick={handleIncrement}
          className="p-2 hover:bg-gray-300 rounded-lg"
        >
          <FaPlus className="cursor-pointer text-[13px]" />
        </button>
      </div>

      <div className="w-[10%] flex justify-end pr-2">
        <button
          onClick={() => handleDeleteCart(item._id)}
          className="w-9 h-9 hover:bg-gray-300 rounded-full text-gray-500 text-lg cursor-pointer transition-all hover:text-red-500 flex items-center justify-center"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
