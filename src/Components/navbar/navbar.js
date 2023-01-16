import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import CartSvg from "./cart.svg";


const NavBar = (props) =>{
    const {inCart} = props;

    function totalQuantity(){
        let sumHelp = 0;

        inCart.map((product) => {
            let quantityTotal= product.quantity;
             sumHelp = sumHelp+quantityTotal
             return sumHelp
            }
        )  
        return sumHelp
    }

        return(
        <div className="navigation">
            <div className="header">
                <div className="wrapper">
                <Link to="/shopping-cart/" state= {inCart} className="link"><h1>Canon Camera Lens Webshop</h1></Link>
                </div>
                <div className="navbar">
                    <Link to="/shopping-cart/shop" state= {inCart} className="link"><h2>Shop</h2></Link>
                    <div className="cart-container"> 
                        <div className="quantity">{totalQuantity()}</div>
                        <Link to="/shopping-cart/cart" state= {inCart} className="link"><img src={CartSvg} alt="cart" className="img-svg"></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar