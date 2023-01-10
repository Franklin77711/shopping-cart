import React from "react";
import "./home.css";
import NavBar from "../navbar/navbar";
import { Link } from "react-router-dom";

const HomePage = () =>{
    return(
        <div>
            <NavBar/>
            <div className="content">
                <h1>Welcome to Random Webshop Page!</h1>
                <h2>Please feel free to leave your money here and buy everything!</h2>
                <Link to="/shop" className="link" id="homepage-link">Click HERE to Shop Now!</Link>
            </div>
        </div>
    )
}

export default HomePage