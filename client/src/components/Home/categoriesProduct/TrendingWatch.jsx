import React, { useEffect, useState } from "react";
import products from "../../../../public/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";

const TrendingWatch = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const filterData = products.filter((data) => data.category === "watch");
    if (filterData) setDatas(filterData);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto section">
      <div className="mb-5">
        <h2 className="text-[22px] font-semibold relative">
          Trending in Watches
        </h2>
      </div>

      <div>
        <Swiper
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiperSmall"
        >
          {datas.map((data) => (
            <SwiperSlide key={data._id}>
              <div>
                <div className="container_color h-[260px] relative rounded-md">
                  <img
                    className="absolute top-0 left-0 right-0 bottom-0 h-auto max-h-full max-w-full block m-auto"
                    src={data.image}
                    alt="product-iamge"
                  />
                </div>
                <div>
                  <h3 className="text-sm mt-1">{data.title.slice(0, 70)}...</h3>
                  <span className="block mt-1 font-semibold">
                    ${data.price}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingWatch;
