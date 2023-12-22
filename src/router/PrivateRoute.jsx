import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const PrivateRoute = () => {
  const { user } = useContext(UserContext);

  const isAuth = Boolean(user?.email)
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      // Redirigir al login
      navigate("/login");
    }
  }, [isAuth]);

  if (!isAuth) return;

  return <Outlet />;
};

export default PrivateRoute;
