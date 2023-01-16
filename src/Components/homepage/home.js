import React from "react";
import "./home.css";
import NavBar from "../navbar/navbar";
import { Link, useLocation } from "react-router-dom";
import HomeSVG from "./homepage.svg"

const HomePage = () =>{
    const location = useLocation();
    let inCart = []
    if(location.state){
        inCart  = location.state;
    }
    return(
        <div>
            <NavBar inCart={inCart}/>
            <div className="content">
                <h1>Welcome to Canon Camera Lens Webshop!</h1>
                <h2>Please feel free to leave your money here and buy everything!</h2>
                <Link to="/shop" state= {inCart} className="link" id="homepage-link"><button className="button">Click HERE to Shop Now!</button></Link>
            </div>
            <img src={HomeSVG} className="home-svg"></img>
        </div>
    )
}

export default HomePage