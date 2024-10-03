import React from "react";
import game from "../../assets/images/game.webp";

const Sections = () => {
  return (
    <div>
      <section className="max-w-[1400px] mx-auto section relative overflow-hidden">
        <div>
          <div className="flex bg-[#db3c07] w-full rounded-lg px-16 h-[360px] overflow-hidden"></div>

          <div className="flex justify-between items-center gap-5 absolute top-0 left-0 w-full h-full text-white leading-[42px] font-semibold">
            <div className="pl-20">
              <h1 className="text-[34px]">Games you love. Cards you covet.</h1>
              <span className="text-[15px]">
                Build out your trading card collection with merch you can trust.
              </span>
              <div className="mt-5">
                <button className="bg-white px-5 py-[2px] text-[15px] rounded-full text-black">
                  Shop now
                </button>
              </div>
            </div>

            <div className="h-[560px]">
              <img className="w-full h-full" src={game} alt="game_image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sections;
