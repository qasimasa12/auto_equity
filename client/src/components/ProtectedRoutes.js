import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../Context/Context";
import React from 'react'


const ProtectedRoutes = () => {
  const {useAuth} = React.useContext(Context)
  return useAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;