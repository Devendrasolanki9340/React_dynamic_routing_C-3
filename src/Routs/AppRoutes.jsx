import { Route, Routes } from "react-router"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Products from "../Pages/Products"
import ProductDetail from "../Pages/ProductDetail"





const AppRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/product" element={<Products/>}/>
        <Route path="/detail/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
