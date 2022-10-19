import React, {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import {ProductList} from "../components/Product";
import {productsService} from "../components/Product";

export const HomePage = () => {

    const [products, setProducts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        productsService.getAllProducts(location.search).then(({data}) => setProducts(data));
    }, [location])

    return (
        products.length ?
            <div className="row">
                <ProductList products={products} />
                <div></div>
            </div> :
            <span className="spinner-border text-secondary mt-5"></span>
    )
}