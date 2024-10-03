import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Autoplay } from "swiper/modules";

import slider1 from "../.././assets/sliders/slide1.jpg";
import slider2 from "../.././assets/slider2.jpg";
import slider3 from "../.././assets/slider3.jpeg";
import slider4 from "../.././assets/slider4.jpg";
import slider5 from "../.././assets/slider5.jpg";
import slider6 from "../.././assets/slider6.jpg";
import slider7 from "../.././assets/slider7.jpg";
import slider8 from "../.././assets/slider8.webp";

const Banner = () => {
  return (
    <div className="banner px-8 relative w-full pt-14">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
