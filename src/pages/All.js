import { useState, useEffect } from "react";
import PostList from "../components/posts/Postlist";

// const DUMMY_DATA = [
//     {
//         id: 1,
//         image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Wikipedia_mini_globe_handheld.jpg",
//         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
//     },
//     {
//         id: 2,
//         image: "https://images.hindustantimes.com/tech/img/2020/09/24/960x540/Untitled_design_(12)_1600925482551_1600925492949.png",
//         title: "qui est esse",
//         body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
//     },
//     {
//         id: 3,
//         image: "https://images.hindustantimes.com/tech/img/2021/08/22/960x540/2020-08-19T093016Z_1_LYNXNPEG7I0MM_RTROPTP_3_HEALTH-CORONAVIRUS-WHATSAPP_1600102965051_1600102993575_1629637250046.JPG",
//         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
//     },
//     {
//         id: 4,
//         image: "https://images.hindustantimes.com/tech/img/2021/08/23/960x540/Realme_C21Y_1629708107385_1629708120240.jpg",
//         title: "eum et est occaecati",
//         body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
//     }
// ]
function All() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedPosts] = useState([]);

    //useEffect for not causes infinite loop:
    useEffect(() => {
        setIsLoading(true);

        fetch("https://learning-react-57afe-default-rtdb.firebaseio.com/posts.json")
            .then(response => {
                return response.json();
            }).then((data) => {
                const posts = [];

                for (const key in data) {
                    const post = {
                        id: key,
                        ...data[key]
                    }
                    posts.push(post);
                };

                setIsLoading(false);
                setLoadedPosts(posts);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        )
    }
    console.log(loadedPosts);

    return (
        <section className="container w-75">
            <h1 className="text-center mt-5 text-danger">All</h1>
            <PostList posts={loadedPosts} />
        </section>
    );
}
export default All;