import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import axiosSource from "../Axios/axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosSource
      .get(`/product/all/${id}`)
      .then((res) => {
        if (res.data._id) setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  //   console.log(product);

  return (
    <div className="mt-14 bg-gray-100 mx-10">
      <h1 className="text-3xl font-bold text-center py-10">
        Your Product Information
      </h1>

      <ProductInfo product={product} />
    </div>
  );
};

export default ProductDetails;
