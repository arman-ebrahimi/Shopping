import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Search = () => {

    const [state, setState] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.target.reset();
        e.preventDefault();
        navigate({
            pathname: "/",
            search: "q=" + state
        });
    }

    return (
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input onChange={e => setState(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}