
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./Components/shoppage/shop.js";
import HomePage from "./Components/homepage/home.js";
import CartPage from "./Components/cartpage/cartpage.js"
import "./App.css"



const App =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/shop" element={<ShopPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
