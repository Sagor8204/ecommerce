import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  const isAdmin = user?.role == "admin";
  const isMember = user?.role == "member";

  if (isAdmin || isMember) {
    return children;
  }
  return <Navigate to="/" replace />;
};

export default AdminRoute;
