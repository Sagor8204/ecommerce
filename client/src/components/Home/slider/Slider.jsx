import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderItem from "./SliderItem";
import { Navigation, Pagination, Keyboard, Autoplay } from "swiper/modules";

import "swiper/swiper-bundle.css";

const Slider = () => {
  return (
    <div className="max-w-[1400px] section mx-auto">
      <Swiper
        navigation={true}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard, Autoplay]}
        className="mySwiperSlider"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
      >
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
