import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import ProductRating from "../../components/Shop/Ratings";
import axiosSource from "../Axios/axios";

const Shop = () => {
  const { products, setProducts, setLoading, loading } = useAuth();

  useEffect(() => {
    axiosSource
      .get("/product/all")
      .then((res) => {
        if (res.data) {
          setLoading(true);
          setProducts(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        // if (err.response.data) return navigate("/");
        console.log(err);
      });
  }, []);

  return (
    <div className="overflow-hidden box-border pt-12">
      <div className="w-[1280px] mx-auto flex gap-3 pt-10 px-1">
        <div className="w-[220px] border border-card-color"></div>
        <div className="w-[1060px]">
          {loading && <div>Loading...</div>}

          <div className="flex gap-5 flex-wrap">
            {products.map((data) => {
              return (
                <Link key={data._id} to={`/${data.category}/${data._id}`}>
                  <div className="product_item rounded-2xl w-[240px] box-border bg-slate-100 border border-slate-400 cursor-pointer">
                    <div className="overflow-hidden w-[90%] h-[180px] mt-[10px] mx-auto rounded-2xl">
                      <img
                        className="w-full h-full object-cover"
                        src={data.image}
                        alt="product image"
                      />
                    </div>

                    <div className="p-2 text-center">
                      <h3 className="text-lg font-bold">
                        {data.title.length < 20
                          ? data.title
                          : data.title.slice(0, 20) + "..."}
                      </h3>
                      <div className="flex justify-center my-1">
                        <ProductRating rating={data.rating} />
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
        </div>
      </div>
    </div>
  );
};

export default Shop;
