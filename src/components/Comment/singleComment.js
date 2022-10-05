
export const SingleComment = (props) => {
    return(
        <div className="row">
            <div className="col-2">
                <img src={'/images/Ms.jpg'} alt="pic" width="100%" />
            </div>
            <div className="col-10">
                <h3>{props.author}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}