import { Navigate, Outlet } from "react-router-dom";
import { Context } from "../Context/Context";
import React from 'react'


const ProtectedRoutes = () => {
  const {useAuth} = React.useContext(Context)
  if(useAuth !== null){
    window.localStorage.setItem("auth",useAuth)
  }
  const auth = JSON.parse(window.localStorage.getItem("auth"))
  console.log(useAuth)
  console.log(auth)
  if(useAuth !== null){
    return useAuth ? <Outlet /> : <Navigate to="/" />;
  }else{
    return auth ? <Outlet /> : <Navigate to="/" />;
  }
};

export default ProtectedRoutes;