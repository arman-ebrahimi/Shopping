import {SingleComment} from "./singleComment";

export const CommentList = ({comments}) => {
    if(!comments.length){
        return <div style={{fontSize: 25}} className="text-center mb-2">No Review...</div>
    }
    return(
        <ul className="list-group list-group-flush">
            { comments.map((comment, index) =>
            <li className="list-group-item" key={index}>
                <SingleComment {...comment} />
            </li>
            )}
        </ul>
    )
}