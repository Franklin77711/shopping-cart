import {React, useState} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import CartSvg from "./cart.svg";


const NavBar = (props) =>{
    const {inCart} = props;
    const [itemsInCart, setItemsInCart] = useState(inCart);

        if(JSON.stringify(itemsInCart) !== JSON.stringify(inCart) && inCart){
            console.log(inCart)
            for(let item of inCart){
                setItemsInCart(itemsInCart.concat(item)) 
            }
        }
    console.log(inCart)
        return(
        <div className="navigation">
            <div className="header">
                <div className="wrapper">
                <Link to="/" className="link"><h1>Random Webshops Page</h1></Link>
                </div>
                <div className="navbar">
                    <Link to="/shop" className="link">Shop</Link>
                    <div className="cart-container"> 
                        <div className="quantity">{itemsInCart.length}</div>
                        <Link to="/cart" state= {itemsInCart} className="link"><img src={CartSvg} alt="cart"></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar