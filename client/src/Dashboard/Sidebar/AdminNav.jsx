import React from "react";
import { NavLink } from "react-router-dom";

const AdminNav = () => {
  return (
    <div>
      <ul className="flex flex-wrap lg:flex-col lg:gap-0 gap-5">
        <NavLink
          className="py-[5px] px-3 transition-all duration-300 hover:bg-slate-400"
          to={`/dashboard/admin-profile`}
        >
          <li className="my-2">Admin Profile</li>
        </NavLink>
        <NavLink
          className="py-[5px] px-3 transition-all duration-300 hover:bg-slate-400"
          to={`/dashboard/add-item`}
        >
          <li className="my-2">Add Item</li>
        </NavLink>
        <NavLink
          className="py-[5px] px-3 transition-all duration-300 hover:bg-slate-400"
          to={`manage-members`}
        >
          <li className="my-2">Manage Members</li>
        </NavLink>
        <NavLink
          className="py-[5px] px-3 transition-all duration-300 hover:bg-slate-400"
          to={`make-notice`}
        >
          <li className="my-2">Make Announcement</li>
        </NavLink>
        <NavLink
          className="py-[5px] px-3 transition-all duration-300 hover:bg-slate-400"
          to={`agreement-request`}
        >
          <li className="my-2">Agreement Requests</li>
        </NavLink>
        <NavLink
          className="py-[5px] px-3 transition-all duration-300 hover:bg-slate-400"
          to={`manage-coupon`}
        >
          <li className="my-2">Manage Coupons</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default AdminNav;
