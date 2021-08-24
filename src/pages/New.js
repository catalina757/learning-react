import { useHistory } from  "react-router-dom";
import NewPost from "../components/posts/NewPost";
function New() {
    const history = useHistory();

    function addPost(postData) {
        fetch(
            "https://learning-react-57afe-default-rtdb.firebaseio.com/posts.json",
            {
                method: "POST",
                body: JSON.stringify(postData),
                headers: {

                    "Content-type": "application-json"
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return (
        <section className="container w-75">
            <h1 className="text-center mt-5 text-danger">Add New</h1>
            <NewPost onAddPost={addPost}/>
        </section>
    )
}

export default New;