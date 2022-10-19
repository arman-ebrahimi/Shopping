import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

export const Carts = ({products}) => {

    const dispatch = useDispatch();
    const removeProduct = (id) => {
        dispatch({type: "cart/removeItem", payload: id})
    }
    const addToCount = (id) => {
        dispatch({type: "cart/changeCount", payload: {id: id, amount: 1}})
    }
    const subOfCount =(id) => {
        dispatch({type: "cart/changeCount", payload: {id: id, amount: -1}})
    }

    if(!products.length > 0){
        return(
            <div className="d-flex flex-column align-items-center mt-4">
                <img alt="upset" width="80" src="/images/images.jpg" />
                <div className="fs-3">There isn't any product in the cart!</div>
            </div>
        )
    }

    return(
    <>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Pic</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col" className="text-center">Quantity</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td><img alt="thumb-pic" width="50" height="40" src={product.pic} /></td>
                        <td>{product.title}</td>
                        <td className="fw-bold">{product.price}</td>
                        <td className="text-center">
                            <button className="btn btn-sm btn-danger" onClick={() => subOfCount(product.id)}>-</button>
                            {" "}{product.count}{" "}
                            <button className="btn btn-sm btn-success" onClick={() => addToCount(product.id)}>+</button>
                        </td>
                        <td><button className="btn btn-danger btn-sm" onClick={() => removeProduct(product.id)}>remove</button></td>
                    </tr>
                )
            )}
            </tbody>
        </table>
        <div className="d-flex justify-content-center mt-5">
            <Link to="/checkout"><button className="btn btn-success">Checkout</button></Link>
        </div>
    </>
    )
}