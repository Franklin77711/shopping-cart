import React from "react";
import "./home.css";
import NavBar from "../navbar/navbar";
import { Link, useLocation } from "react-router-dom";

const HomePage = () =>{
    const location = useLocation();
    const inCart  = location.state;

    return(
        <div>
            <NavBar inCart={inCart}/>
            <div className="content">
                <h1>Welcome to Random Webshop Page!</h1>
                <h2>Please feel free to leave your money here and buy everything!</h2>
                <Link to="/shop" state= {inCart} className="link" id="homepage-link">Click HERE to Shop Now!</Link>
            </div>
        </div>
    )
}

export default HomePage