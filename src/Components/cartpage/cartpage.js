import React from "react";
import "./cartpage.css";
import NavBar from "../navbar/navbar";
import { useLocation } from "react-router-dom";
import uniqid from "uniqid";


const CartPage = () =>{
    const location = useLocation();
    const  inCart  = location.state;

    console.log(inCart)
    return(
        <div>
            <NavBar inCart={inCart}/>
            <div className="item-container">
                {inCart.map((product) =>
                    <div className="single-product"  key={uniqid()}>
                        <img src={product.image} alt="product" className="product-image"></img>
                        <h2>{product.name}</h2>
                        <input type="number"></input>
                        <h3>{Math.round((product.price * 0.0027) * product.quantity)} $</h3>
                        <button className="remove">Remove</button>
                    </div>
                )}
                <button>Order</button>
            </div>
        </div>
    )
}
export default CartPage