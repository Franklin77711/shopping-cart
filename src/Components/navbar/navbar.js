import {React, useState} from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import CartSvg from "./cart.svg";


const NavBar = (props) =>{
    const {inCart} = props;
    const [totalSum, setTotalSum] = useState(0);

        if(totalSum == 0 && inCart.length > 0){
            let sumHelp = 0;
            inCart.map((product) => {
                let sumPrice= Math.round(product.price * 0.0027) * product.quantity;
                 sumHelp = sumHelp+sumPrice
                }
            ) 
            setTotalSum(sumHelp)
        
        }
        return(
        <div className="navigation">
            <div className="header">
                <div className="wrapper">
                <Link to="/" state= {inCart} className="link"><h1>Random Webshops Page</h1></Link>
                </div>
                <div className="navbar">
                    <Link to="/shop" state= {inCart} className="link">Shop</Link>
                    <div className="cart-container"> 
                        <div className="quantity">{inCart.length}</div>
                        <Link to="/cart" state= {inCart} className="link"><img src={CartSvg} alt="cart"></img></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar