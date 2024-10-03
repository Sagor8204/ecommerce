import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axiosSource from "../Axios/axios";
import AllProducts from "./AllProducts";
import ProductsFilter from "./filter/ProductsFilter";

const Shop = () => {
  const { products, setProducts, setLoading, loading } = useAuth();
  const min = 0;
  const max = 50000000;
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    axiosSource
      .get(
        `/product/all?minPrice=${minPrice}&maxPrice=${maxPrice}&category=${category}&brand=${brand}&size=${size}&color=${color}`
      )
      .then((res) => {
        if (res.data) {
          setLoading(true);
          setProducts(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [minPrice, maxPrice]);

  return (
    <div className="overflow-hidden box-border mt-[62px] section">
      <div className="max-w-[1500px] mx-auto flex gap-10">
        <div className="w-[18%]">
          <ProductsFilter
            min={min}
            max={max}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            setCategory={setCategory}
            setBrand={setBrand}
            setSize={setSize}
            setColor={setColor}
          />
        </div>
        <div className="w-[82%]">
          {loading && <div>Loading...</div>}

          <AllProducts products={products} />
        </div>
      </div>
    </div>
  );
};

export default Shop;

// Category:
// Footwear

// Subcategories:
// Men's Sneakers
// Women's Sneakers
// Kids' Sneakers
// Basketball Shoes
// Running Shoes
// Lifestyle Sneakers
// Apparel

// Subcategories:
// Men's Clothing
// Women's Clothing
// Hoodies & Sweatshirts
// T-Shirts
// Shorts & Pants
// Jackets
// Accessories

// Subcategories:
// Caps & Hats
// Socks
// Backpacks
// Wristbands
