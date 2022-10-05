import {useSelector} from "react-redux";

import {Carts} from "../components/Cart";

export const CartPage = () => {
    const products = useSelector(state => state.cart);

    return <div className="mt-2">
        <Carts products={products} />
    </div>
}