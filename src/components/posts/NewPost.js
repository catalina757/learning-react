import { useRef } from "react";

function NewPost(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const bodyInputRef = useRef();

    function addPost(event) {
        event.preventDefault();

        console.log(titleInputRef.current.value);
        const  enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredBody = bodyInputRef.current.value;

        const postData = {
            title: enteredTitle,
            image: enteredImage,
            body: enteredBody
        }

        props.onAddPost(postData);
    }

    return (
        <form onSubmit={addPost}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title: </label>
                <input type="text" className="form-control" id="title" ref={titleInputRef} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image: </label>
                <input type="url" className="form-control" id="image" ref={imageInputRef} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="form-label">Body: </label>
                <textarea id="body" className="form-control" ref={bodyInputRef} required rows="5"></textarea>
            </div>
            <div>
                <button className="btn btn-outline-success">Add Post</button>
            </div>
        </form>
    )
}

export default NewPost;