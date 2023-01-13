import {React, useState} from "react";
import "./cartpage.css";
import NavBar from "../navbar/navbar";
import { useLocation } from "react-router-dom";
import uniqid from "uniqid";


const CartPage = () =>{
    const location = useLocation();
    const inCart = location.state;

    const [totalSum, setTotalSum] = useState(0);
    const [cartPageCart, setcartPageCart] = useState(inCart);

    const handleUp = (product) =>{
        product.quantity = product.quantity + 1;
        sumTotal();
    }

    const handleDown = (product) =>{
        product.quantity = product.quantity - 1;
        if(product.quantity == -1){
            product.quantity = 0;
        }
        sumTotal();
    }
    
    function sumTotal(){
        let sumHelp = 0;

        cartPageCart.map((product) => {
            let sumPrice= Math.round(product.price * 0.0027) * product.quantity;
             sumHelp = sumHelp+sumPrice
            }
        )
        console.log(sumHelp)    
        setTotalSum(sumHelp)
    }

    const someTotalRemove = product =>{
        let sumHelp = totalSum;
        console.log(sumHelp)

        let sumPrice= Math.round(product.price * 0.0027) * product.quantity;
        sumHelp = sumHelp - sumPrice
        
        console.log(sumHelp) 
        setTotalSum(sumHelp)

    }

    const handleRemove = (product)=> {
        console.log(product)
        console.log(cartPageCart.filter((obj)=> obj !== product))
        if(cartPageCart.includes(product)){
            setcartPageCart(cartPageCart.filter((obj)=> obj !== product))
            someTotalRemove(product);
        }
        

    }
    return(
        <div>
            <NavBar inCart={cartPageCart}/>
            <div className="item-container">
                {cartPageCart.map((product) =>
                    <div className="single-product"  key={uniqid()}>
                        <img src={product.image} alt="product" className="product-image cart-image"></img>
                        <h2 className="cart-name">{product.name}</h2>
                        <div className="quantity-container">
                            <button type="button" onClick={()=>handleUp(product)}>+</button>
                            <p>{product.quantity}</p>
                            <button type="button" onClick={()=>handleDown(product)}>-</button>
                        </div>
                        <h3 className="cart-price">{Math.round((product.price * 0.0027) * product.quantity)} $</h3>
                        <button className="remove" onClick={()=>handleRemove(product)}>Remove</button>
                    </div>
                )}
                <div className="order-container">
                    <p>Total Price: {totalSum} $</p>
                    <button type="button" className="order-button">Order</button>
                </div>
            </div>
        </div>
    )
}
export default CartPage