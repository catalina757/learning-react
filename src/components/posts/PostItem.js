

function PostItem(props) {
    return (
        <li className="my-5 d-flex align-items-center">
            <div className="w-100">
                <img className="w-75" src={props.image} alt={props.title}/>
            </div>
            <div>
                <h3>{props.title}</h3>
                <div>{props.body}</div>
                <button className="btn btn-outline-primary my-3">To favorites</button>
            </div>
        </li>
    );
}

export default PostItem;