import {React, useState} from "react";
import "./shoppage.css";
import NavBar from "../navbar/navbar";
import ProductsJSON from "../../Data/run_results.json"
import uniqid from "uniqid"

const ShopPage = () =>{
    const {products} = ProductsJSON;

    const [productSorted, setProductSorted] = useState(products)

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

    return(
        <div>
            <NavBar/>
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
                                    <h3 className="product-price">{Math.round(product.price * 0.0027)}$</h3>
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