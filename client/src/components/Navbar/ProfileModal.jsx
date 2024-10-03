import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axiosSource from "../Axios/axios";

const ProfileModal = ({ open, setOpen, user }) => {
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    axiosSource
      .delete("/user/logout")
      .then((res) => {
        if (res.data) {
          localStorage.removeItem("loginUser");
          navigate("/");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClick = () => {
    return setOpen(false);
  };

  return (
    <div className="flex items-center gap-10 relative">
      <div
        onClick={() => setOpen(!open)}
        className="border border-gray-500 rounded-full px-4 py-[2px] cursor-pointer hover:border-2 hover:border-gray-400 flex items-center gap-1 ease-in-out duration-150"
      >
        <span>{user.username}</span>
        <FaCaretDown />
      </div>

      {open && (
        <div
          className={`${
            open ? "modal_active" : "modal_inactive"
          } profileModal absolute -right-10 top-[59px] bg-white z-50 rounded-md p-3 origin-left border border-gray-400`}
        >
          <div className="flex items-center flex-col py-3 text-black mb-6">
            <img
              className="w-12 h-12 rounded-full border border-primary-color"
              src={user.avatar}
              alt="profile_picture"
            />

            <h3>{user.fullName}</h3>
            <span>{user.email}</span>
          </div>

          <div className="flex justify-center gap-5">
            <button
              className="text-white rounded-md p-2 px-5 text-xs bg-secondary-color"
              onClick={() => logout()}
            >
              Sign Out
            </button>
            <Link
              to={"/account/profile"}
              className="text-white rounded-md p-2 px-5 text-xs bg-secondary-color"
              onClick={handleClick}
            >
              profile
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileModal;
