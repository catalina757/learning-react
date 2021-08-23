import PostItem from "./PostItem";

function PostList(props) {
    return (
        <ul className="container">
            {props.posts.map(post => <PostItem key={post.id}
                                               id={post.id}
                                               image={post.image}
                                               title={post.title}
                                               body={post.body}
            />)}
        </ul>
    );
}

export default PostList;