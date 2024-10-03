import React from "react";
import Slider from "./slider/Slider";
import CategoriesProduct from "./categoriesProduct/CategoriesProduct";
import Sections from "./Sections";
import TakeOffFallFavorites from "./TakeOffFallFavorites";

const Home = () => {
  return (
    <div className="mt-[62px]">
      <Slider />
      <CategoriesProduct />
      <TakeOffFallFavorites />
      <Sections />
    </div>
  );
};

export default Home;
