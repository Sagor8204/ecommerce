import React from "react";
import AthleticShoes from "./AthleticShoes";
import TrendingSneaker from "./TrendingSneaker";
import TrendingWatch from "./TrendingWatch";
import TrendingKicks from "./TrendingKicks";
import Refurbished from "./Refurbished";

const CategoriesProduct = () => {
  return (
    <div>
      <AthleticShoes />
      <TrendingSneaker />
      <TrendingWatch />
      <TrendingKicks />
      <Refurbished />
    </div>
  );
};

export default CategoriesProduct;
