
export const Carts = ({products}) => {

    if(!products.length > 0){
        return(
            <div className="d-flex flex-column align-items-center mt-4">
                <img alt="upset" width="80" src="/images/images.jpg" />
                <div className="fs-3">There isn't any product in the cart!</div>
            </div>
        )
    }

    return(
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
                    <td><img width="50" height="40" src={product.pic} /></td>
                    <td>{product.title}</td>
                    <td className="fw-bold">{product.price}</td>
                    <td className="text-center">{product.count}</td>
                    <td><button className="btn btn-danger">remove</button></td>
                </tr>
            )
        )}
        </tbody>
    </table>
    )
}