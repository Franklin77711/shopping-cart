
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopPage from "./Components/shoppage/shop.js";
import HomePage from "./Components/homepage/home.js";
import CartPage from "./Components/cartpage/cartpage.js";
import "./App.css";
import React from "react";


const App =() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-cart/" element={<HomePage/>}></Route>
        <Route path="/shopping-cart/shop" element={<ShopPage/>}/>
        <Route path="/shopping-cart/cart" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
