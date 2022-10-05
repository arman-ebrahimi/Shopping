import {Product} from "./product";

export const ProductList = ({products}) => {
    return(
        products.map((item) => (
                <div className="col-4" key={item.id}>
                    <Product data={item} />
                </div>
            ))
    )
}