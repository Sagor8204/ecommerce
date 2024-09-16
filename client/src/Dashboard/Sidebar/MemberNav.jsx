import React from "react";
import { NavLink } from "react-router-dom";

const MemberNav = () => {
  return (
    <div>
      <ul className="flex flex-wrap lg:flex-col lg:gap-0 gap-5">
        <NavLink
          className="py-2 px-3 transition-all duration-300 hover:bg-slate-400"
          to={`/dashboard/my-profile`}
        >
          <li>My Profile</li>
        </NavLink>
        <NavLink
          className="py-2 px-3 transition-all duration-300 hover:bg-slate-400"
          to={`/dashboard/make-payment`}
        >
          <li>Make payment</li>
        </NavLink>
        <NavLink
          className="py-2 px-3 transition-all duration-300 hover:bg-slate-400"
          to={`/dashboard/payment-history`}
        >
          <li>Payment History</li>
        </NavLink>
        <NavLink
          className="py-2 px-3 transition-all duration-300 hover:bg-slate-400"
          to={`/dashboard/announcement`}
        >
          <li>Announcements</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default MemberNav;
