import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../Context/Context";
import React from 'react'


const PrivateRoute = () => {
  const {admin} = React.useContext(Context)
  return admin ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;