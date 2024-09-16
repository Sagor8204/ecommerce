import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useAuth } from "../../contexts/AuthContext";
import ProfileModal from "./ProfileModal";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white py-2 font-semibold border-b border-b-gray-600">
      <div className="flex items-center justify-around">
        <div>
          <NavLink to={"/"}>
            <img src={Logo} className="h-[45px] object-cover" alt="Logo" />
          </NavLink>
        </div>

        <div className="flex items-center rounded-3xl border border-gray-500">
          <input
            type="text"
            className="bg-transparent lg:w-96 md:w-72 w-64 px-[10px] py-2 text-black placeholder:text-sm placeholder:text-gray-400 placeholder:font-semibold leading-none outline-1 outline-violet-500 rounded-l-3xl"
            placeholder="What are looking..."
          />
          <button className="text-black px-3 py-2 text-xl cursor-pointer border-l border-l-gray-500">
            <IoSearch />
          </button>
        </div>

        <div className="flex items-center flex-wrap lg:justify-between md:justify-center md:gap-5 gap-2">
          <NavLink to={"/shop"}>
            <MdOutlineShoppingBag className="text-[25px]" />
          </NavLink>
          <NavLink to={"/cart"}>
            <GrCart className="text-[23px]" />
          </NavLink>
          {user?.id ? (
            <ProfileModal user={user} />
          ) : (
            <div className="flex items-center justify-around md:gap-5 gap-2">
              <NavLink to={"/login"}>
                <span>Login</span>
              </NavLink>
              <NavLink to={"/register"}>Register</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
