// Import React-router
import { BrowserRouter, Route , Routes } from "react-router-dom"

// Import Routes "Pages,layouts"
import LayoutBase from "../layouts/LayoutBase"
import Home from "../pages/Home"
import Products from "../pages/Products"
import Login from "../pages/Login"
import Register from "../pages/Register"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LayoutBase />}>
              <Route path="/products" element={<Products />}/>
            </Route>

            <Route path="/login" element={<Login />}/>
            <Route path='/register' element={<Register />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router