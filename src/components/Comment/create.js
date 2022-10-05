import {useState} from "react";

export const Create = (props) => {
    const [state, setState] = useState({comment: {}, errors: {}})

    const handleChange = (e) => {
        setState({...state,
            comment: {...state.comment, [e.target.name]: e.target.value}
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formValid()){
            props.onComment(state.comment);
            setState({comment: {}, errors: {}});
        }
    }

    const formValid = () => {
        const errors = {};
        if(!state.comment.author){
            errors.author = "Name isn't valid";
        }
        if(!state.comment.text){
            errors.text = "text isn't valid";
        }
        setState({...state, errors})
        return !(errors.author || errors.text)
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input value={state.comment.author || ''} type="text" className="form-control" name="author" onChange={handleChange} />
                <div className="form-text text-danger">{state.errors.author}</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <textarea value={state.comment.text || ''} className="form-control" name="text" rows="5" onChange={handleChange}></textarea>
                <div className="form-text text-danger">{state.errors.text}</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}