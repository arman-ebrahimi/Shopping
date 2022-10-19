import {Link} from "react-router-dom";

import {CartIcon} from "../Cart";
import {Search} from "./search";

export const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/" className="text-decoration-none text-black">
                    <span>shopping</span>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <Link to="/carts">
                    <div className="me-2">
                        <CartIcon />
                    </div>
                    </Link>
                    <Search />
                </div>
            </div>
        </nav>
    )
}