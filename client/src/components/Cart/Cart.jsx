import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { fetchCart } from "../Axios/apiRequest";

const Cart = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCart();
      setCart(data);
    };
    getData();
  }, []);

  return (
    <div className="h-screen mt-[62px] bg-[#373a36]">
      <div className="w-[1200px] flex gap-5 pt-10 mx-auto">
        <div className="w-4/6">
          <div className="flex gap-5 items-center justify-between bg-white rounded-md py-2 px-2 font-semibold text-gray-600">
            <div className="w-[54%]">Product</div>
            <span className="w-[16%]">Price</span>
            <span className="w-[20%] text-center">Quantity</span>
            <span className="w-[10%] text-right">Delete</span>
          </div>
          <div>
            {cart?.items?.map((item) => {
              return <CartItem key={item?._id} item={item} />;
            })}
          </div>

          <div className="bg-white p-2 pr-5 text-right text-gray-500 font-semibold rounded-md">
            Total Price:
            <span className="pl-1">{cart?.totalPrice}</span>
          </div>
        </div>

        <div className="w-2/6 bg-white">order</div>
      </div>
    </div>
  );
};

export default Cart;
