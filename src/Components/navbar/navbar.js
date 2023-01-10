import {React, useState} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import CartSvg from "./cart.svg";


const NavBar = (props) =>{
    const currentQuntity = props
    const [quantity, setQuantity] = useState();
    
    if(quantity !== currentQuntity.quantity){
        setQuantity(currentQuntity.quantity);
    }

    return(
        <div className="navigation">
            <div className="header">
                <div className="wrapper">
                <Link to="/" className="link"><h1>Random Webshops Page</h1></Link>
                </div>
                <div className="navbar">
                    <Link to="/shop" className="link">Shop</Link>
                    <div className="cart-container"> 
                        <div className="quantity">{quantity}</div>
                        <Link to="/cart" className="link"><img src={CartSvg} alt="cart"></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar