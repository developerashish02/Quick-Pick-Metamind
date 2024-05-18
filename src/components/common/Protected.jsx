import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Protected = () => {
  const { isAuthenticated, loading } = useAuth();

  console.log(isAuthenticated, "isisAuthenticated");

  if (isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Protected;
