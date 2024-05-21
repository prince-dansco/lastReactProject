import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/contextProvider";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectRoute = () => {
  const { isLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");

  useEffect(() => {
    if (!isLogin ) {
      navigate("/login");
    }
  }, [isLogin, navigate]);
  return isLogin ? <Outlet />: "" ;
};

export default ProtectRoute;
