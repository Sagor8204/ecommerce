import React from "react";
import s1img1 from "../../../assets/images/slider1-img1.webp";
import s1img2 from "../../../assets/images/slider1-img2.webp";
import s1img3 from "../../../assets/images/slider1-img3.webp";
import { MdArrowForwardIos } from "react-icons/md";

const SliderItem = () => {
  return (
    <div>
      <div className="w-full bg-[#5e1d08] rounded-lg grid grid-cols-[1.5fr,2fr] p-12 text-[#ffe1d7] h-[360px]">
        <div>
          <h1 className="text-[36px] font-semibold">
            Up to 60% off at The Brand Outlet
          </h1>
          <span>Save big on the brands you love, all in one place.</span>
          <div>
            {/* i will give the below button some css effects */}
            <button className="px-5 py-[10px] bg-white rounded-full text-black font-semibold text-sm mt-5">
              Shop now
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <img className="w-[210px]" src={s1img1} alt="slider-1-image-1" />
            <a
              className="text-[20px] font-semibold flex items-center justify-center"
              href="/"
            >
              Dooney & Bourke <MdArrowForwardIos className="mt-1" />
            </a>
          </div>
          <div>
            <img className="w-[210px]" src={s1img2} alt="slider-1-image-1" />
            <a
              className="text-[20px] font-semibold flex items-center justify-center"
              href="/"
            >
              Dreame <MdArrowForwardIos className="mt-1" />
            </a>
          </div>
          <div>
            <img className="w-[210px]" src={s1img3} alt="slider-1-image-1" />
            <a
              className="text-[20px] font-semibold flex items-center justify-center"
              href="/"
            >
              Reebok <MdArrowForwardIos className="mt-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
