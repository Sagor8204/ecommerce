import React from "react";
import { Link } from "react-router-dom";
import ProductRating from "../../components/Shop/Ratings";

const AllProducts = ({ products }) => {
  // console.log(products);

  return (
    <div className="flex gap-5 flex-wrap ">
      {products.map((data) => {
        return (
          <Link key={data._id} to={`/${data.category}/${data._id}`}>
            <div className="product_item rounded-2xl w-[240px] box-border bg-slate-100 border border-slate-400 cursor-pointer">
              <div className="overflow-hidden w-[90%] h-[180px] mt-[10px] mx-auto rounded-2xl">
                <img
                  className="w-full h-full object-cover"
                  src={data.images[0]}
                  alt="product image"
                />
              </div>

              <div className="p-2 text-center">
                <h3 className="text-lg font-bold">
                  {data.name.length < 20
                    ? data.name
                    : data.name.slice(0, 20) + "..."}
                </h3>
                <div className="flex justify-center my-1">
                  <ProductRating rating={data.ratings?.averageRating} />
                </div>
                <div className="font-semibold">
                  <span className="mr-1">TK:</span>
                  {data.price}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AllProducts;
