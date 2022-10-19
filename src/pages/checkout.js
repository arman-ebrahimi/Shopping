import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const Checkout = () => {

    const [totalPrice, setTotal] = useState(0);

    const listProducts = useSelector(state => state.cart);
    let total = 0;
    useEffect(() => {
        for(let i=0; i < listProducts.length; i++){
            let price = listProducts[i].count * Number(listProducts[i].price.replace(/[$,]/g, ""));
            total += price;
        }
        setTotal(total);
    })

    return(
        <>
            <div className="d-flex justify-content-between border-bottom mt-4">
                <h2>Total Price: </h2><h3 className="">{totalPrice}</h3>
            </div>
            <form className="mt-3 d-flex justify-content-between align-items-center">
                <label htmlFor="address"><b>Please inter your address: </b></label>
                <textarea id="address" cols="40"></textarea>
            </form>
            <br/>
            <button className="btn btn-success d-block mx-auto">Start Payment</button>
        </>
    )
}