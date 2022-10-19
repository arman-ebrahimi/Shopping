import {useSelector} from "react-redux";

export const CartIcon = () => {
    const numbersProducts = useSelector(state => state.cart).length;
    return(
        <>
            <img width="30" src="/images/263142.png" alt="cart" />
            {numbersProducts > 0 &&
                <span style={{position: "absolute", marginTop: "-5px", marginLeft: "-20px"}}
                      className="badge bg-danger rounded-pill">{numbersProducts}
            </span>
            }
        </>
    )
}