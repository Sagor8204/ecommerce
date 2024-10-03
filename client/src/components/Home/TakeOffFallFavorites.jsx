import React, { useEffect, useState } from "react";
import discount1 from "../../assets/images/discount1.webp";
import discount2 from "../../assets/images/discount2.webp";
import discount3 from "../../assets/images/discount3.webp";
import discount4 from "../../assets/images/discount4.webp";
import discount5 from "../../assets/images/discount5.webp";
import discount6 from "../../assets/images/discount6.webp";
import discount7 from "../../assets/images/discount7.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import products from "../../../public/data.json";

const datas = [
  {
    image: discount1,
    text: "Electronics",
  },
  {
    image: discount2,
    text: "Home",
  },
  {
    image: discount3,
    text: "Generators",
  },
  {
    image: discount4,
    text: "Refurbished",
  },
  {
    image: discount5,
    text: "Vacuums",
  },
  {
    image: discount6,
    text: "Fashion and Footwear",
  },
  {
    image: discount7,
    text: "Small Appliances",
  },
];

const TakeOffFallFavorites = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const data = products.filter(
      (data) => data["category-type"] === "free-shipping"
    );
    setProductData(data);
  }, []);
  return (
    <div className="max-w-[1400px] mx-auto section">
      <div className="mb-5">
        <h3 className="text-[22px] font-semibold relative">
          Take 20% off fall favorites
        </h3>
      </div>

      <div className="grid grid-cols-7 gap-5">
        {datas.map((data) => (
          <div className="cursor-pointer favorites" key={data.text}>
            <div className="container_color relative rounded-full border border-gray-300">
              <img
                className="w-full h-full rounded-full"
                src={data.image}
                alt="product-iamge"
              />
            </div>
            <div className="text-center">
              <h3 className="text-sm favorite_text relative py-2 font-semibold inline-block">
                {data.text}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[60px]">
        <Swiper
          slidesPerView={5}
          slidesPerGroup={5}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiperSmall"
        >
          <SwiperSlide>
            <div className="w-[260px] h-[260px] bg-black text-white rounded-md p-6">
              <h2 className="text-2xl mb-1">Today's Deals</h2>
              <span className="text-sm">All With Free Shipping</span>

              <div className="">
                <button className="bg-white rounded-full px-5 py-[10px] text-black text-sm font-semibold mt-5">
                  Shop now
                </button>
              </div>
            </div>
          </SwiperSlide>

          {productData.map((data) => (
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

export default TakeOffFallFavorites;
