// Import React-router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import Routes "Pages,layouts"
import LayoutBase from "../layouts/LayoutBase";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { UserProvider } from "../context/UserContext";
import EditProfile from "../pages/EditProfile";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutBase />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route element={<PrivateRoute />}>
              <Route path="/editProfile" element={<EditProfile />} />
            </Route>
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default Router;
