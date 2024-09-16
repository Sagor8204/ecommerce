import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import NavBar from "./Sidebar/NavBar";
import logo from "../assets/logo.png";
import DashboardContent from "./dashboardContent/DashboardContent";
import { IoIosMenu } from "react-icons/io";

const Dashboard = () => {
  const { pathname } = useLocation();
  const [sidebar, setSidebar] = useState(true);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`${
          sidebar ? "sidebar_active w-1/6 bg-slate-200" : "sidebar_inactive"
        } `}
      >
        <div className="py-[9px] border-b border-b-slate-400">
          <Link to={"/dashboard"}>
            <img className="mx-auto w-28" src={logo} alt="logo" />
          </Link>
        </div>
        <NavBar />
      </div>
      <div className="w-full">
        <div className="py-[12.5px] border-b border-b-slate-400">
          <IoIosMenu
            className="text-3xl ml-2 cursor-pointer"
            onClick={handleSidebar}
          />
        </div>
        {pathname == "/dashboard" ? <DashboardContent /> : <Outlet />}
      </div>
    </div>
  );
};

export default Dashboard;
