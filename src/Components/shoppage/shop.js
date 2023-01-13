import {React, useState} from "react";
import "./shoppage.css";
import NavBar from "../navbar/navbar";
import ProductsJSON from "../../Data/run_results.json";
import uniqid from "uniqid";
import { useLocation } from "react-router-dom";



const ShopPage = () =>{
    const location = useLocation();
    const navCart  = location.state;
    
    function cartCheck (){
        if(navCart){
            console.log("nem üres")
            return navCart
            
        }else{
            console.log("üres")
            return []
        }
    }
 

    const {products} = ProductsJSON;
    const [inCart, setInCart] = useState(cartCheck);
    const [productSorted, setProductSorted] = useState(products);
    //----------------------OrderByFunctions-------------------------
    function ABCsort(){
        setProductSorted([...productSorted].sort((a, b) =>
        a.name > b.name ? 1 : -1,
      ))
    }
    function CBAsort(){
        setProductSorted([...productSorted].sort((a, b) =>
        a.name < b.name ? 1 : -1,
      ))
    }
    function PriceUP(){
        setProductSorted([...productSorted].sort((a, b) => a.price - b.price))
    }
    function PriceDown(){
        setProductSorted([...productSorted].sort((a, b) => b.price - a.price))
    }
//--------------------------------END--------------------------------------
//--------------------------Cart-Add-Handle--------------------------------

    const handleAddToCart = (product)=>{
                if(!inCart.includes(product)){
                    product.quantity = product.quantity+1;
                    setInCart(inCart.concat(product));
                }
    }
    return(
        <div> 
            <NavBar inCart={inCart} />
            <div className="shoppagecontent">
                <div className="item-nav">
                    <ol>
                        <li onClick={ABCsort}>A-Z</li>
                        <li onClick={CBAsort}>Z-A</li>
                        <li onClick={PriceUP}>Price &#8593;</li>
                        <li onClick={PriceDown}>Price &#8595;</li>
                    </ol>
                </div>
                <div className="items">
                    {productSorted.map((product)=>{
                        return(
                            <div className="product" key={uniqid()}>
                                <img src={product.image} alt="product" className="product-image"></img>
                                <div>
                                    <h2 className="product-name">{product.name}</h2>
                                    <div className="price-container">
                                        <h3 className="product-price">{Math.round(product.price * 0.0027)}$</h3>
                                        <button type="button" onClick={()=>handleAddToCart(product)}>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShopPage