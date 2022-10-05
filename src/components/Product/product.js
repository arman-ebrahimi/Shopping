import {Link} from "react-router-dom";

export const Product = ({data}) => {

    return(
        <div className="card mt-3">
            <img src={data.pic} className="card-img-top" alt="card pic" />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p style={{fontSize: 22, fontWeight: 700}} className="text-success">{data.price}</p>
                <Link to={"/details/" + data.id} className="btn btn-primary">More</Link>
            </div>
        </div>
    )
}