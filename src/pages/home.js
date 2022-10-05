import React, {useState, useEffect} from "react";
import {ProductList} from "../components/Product";
import {productsService} from "../components/Product";

export const HomePage = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        productsService.getAllProducts().then(({data}) => setProducts(data));
    })

    return (
        products.length ?
            <div className="row">
                <ProductList products={products}/>
            </div> :
            <span className="spinner-border text-secondary mt-5"></span>
    )
}