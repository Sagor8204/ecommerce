import React, { useEffect, useState } from "react";
import products from "../../../../public/data.json";

const TrendingKicks = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const filterData = products.filter(
      (data) => data.category === "trending-kicks"
    );
    if (filterData) setDatas(filterData);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto section">
      <div className="mb-5">
        <h2 className="text-[22px] font-semibold relative">
          Score these trending kicks
        </h2>
      </div>
      <div className="grid grid-cols-7 gap-5">
        {datas.map((data) => (
          <div
            className="cursor-pointer trending_kicks relative"
            key={data._id}
          >
            <div className="container_color border border-gray-300 relative rounded-full transition-all duration-300">
              <img
                className="w-full h-full rounded-full"
                src={data.image}
                alt="product-iamge"
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold mt-1 text-center">
                {data.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingKicks;
