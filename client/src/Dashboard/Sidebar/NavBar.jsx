import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import AdminNav from "./AdminNav";
import MemberNav from "./MemberNav";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { user } = useAuth();
  const isAdmin = user?.role == "admin";
  const isMember = user?.role == "member";

  return (
    <div>
      {isAdmin ? <AdminNav /> : isMember ? <MemberNav /> : null}{" "}
      <NavLink to={`/`}>Home</NavLink>
    </div>
  );
};

export default NavBar;
