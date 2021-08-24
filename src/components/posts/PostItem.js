

function PostItem(props) {
    return (
        <li className="my-5 d-flex align-items-center">
            <div className="container-fluid mx-5">
                <img className="img-fluid" src={props.image} alt={props.title}/>
            </div>
            <div className="container-fluid">
                <h3>{props.title}</h3>
                <div>{props.body}</div>
                <button className="btn btn-outline-primary my-3">To favorites</button>
            </div>
        </li>
    );
}

export default PostItem;