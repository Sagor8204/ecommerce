import React, { useEffect, useState } from "react";
import RangeFilter from "./RangeFilter";
import axiosSource from "../../Axios/axios";

const ProductsFilter = ({
  min,
  max,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  setCategory,
  setBrand,
  setSize,
  setColor,
}) => {
  const prigeGap = 1000;
  const [products, setProducts] = useState([]);

  // take the unique categories fomr duplicate categories
  useEffect(() => {
    axiosSource
      .get("/product/all")
      .then((res) => {
        if (res.data) {
          setProducts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // all categories get without duplicate category
  const allCategories = products.map((data) => data.category);
  const uniqueCategories = [...new Set(allCategories)];

  // all brand get without duplicate brand
  const allBrand = products.map((data) => data.brand);
  const uniqueBrand = [...new Set(allBrand)];

  // all size get without duplicate size
  let makeSizeData = [];
  products.map((data) => {
    data.sizes.map((sData) => {
      return makeSizeData.push(sData);
    });
  });
  const uniqueSizeData = makeSizeData.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => JSON.stringify(t) === JSON.stringify(value))
  );

  // all color get without duplicate color
  let makeColorData = [];
  products.map((data) => {
    data.colors.map((cData) => {
      return makeColorData.push(cData);
    });
  });
  const uniqueColorData = makeColorData.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => JSON.stringify(t) === JSON.stringify(value))
  );

  const handleChangeCategory = (category) => {
    setCategory(category);
  };

  const handleChangeBrand = (brand) => {
    setBrand(brand);
  };

  const handleSizeChange = (size) => {
    setSize(size);
  };

  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <div className="p-3">
      {/* filter by price range */}
      <RangeFilter
        min={min}
        max={max}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        prigeGap={prigeGap}
      />
      {/* category filter */}
      <div className="mb-3">
        <h3 className="font-semibold">Category</h3>
        <ul>
          {uniqueCategories?.map((data) => (
            <li
              onClick={() => handleChangeCategory(data)}
              key={data}
              className="cursor-pointer text-[13px] my-[3px] text-gray-500"
            >
              {data}
            </li>
          ))}
        </ul>

        <div className="border-b border-card-color mt-4"></div>
      </div>
      {/* brand filter */}
      <div className="mb-3">
        <h3 className="font-semibold">Brand</h3>

        <ul>
          {uniqueBrand?.map((data) => (
            <li
              onClick={() => handleChangeBrand(data)}
              className="flex items-center gap-2 text-[13px] my-[3px] text-gray-500 cursor-pointer"
              key={data}
            >
              <input type="checkbox" />
              <span>{data}</span>
            </li>
          ))}
        </ul>

        <div className="border-b border-card-color mt-4"></div>
      </div>
      {/* size filter */}
      <div className="mb-3">
        <h3 className="font-semibold">Size</h3>

        <ul className="flex items-center gap-3 flex-wrap box-border">
          {uniqueSizeData?.map((data) => (
            <li
              onClick={() => handleSizeChange(data)}
              className="border border-card-color p-2 rounded-lg text-[13px] my-[3px] text-gray-500 cursor-pointer hover:bg-gray-200 transition-all duration-300"
              key={data}
            >
              {data}
            </li>
          ))}
        </ul>

        <div className="border-b border-card-color mt-4"></div>
      </div>
      {/* color filter */}
      <div className="mb-3 overflow-hidden">
        <h3 className="font-semibold">Color</h3>

        <ul className="flex items-center gap-3 flex-wrap box-border">
          {uniqueColorData?.map((data) => (
            <li
              onClick={() => handleColorChange(data)}
              className="w-6 h-6 border border-card-color rounded-lg cursor-pointer"
              style={{ background: `${data.hex}` }}
              key={data.name}
            >
              {/* {data} */}
            </li>
          ))}
        </ul>

        <div className="border-b border-card-color mt-4"></div>
      </div>
    </div>
  );
};

export default ProductsFilter;
