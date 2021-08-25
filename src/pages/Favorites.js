import {useContext} from "react";
import FavoritesContext from "../state-store/favorites-context";
import PostList from "../components/posts/Postlist";

function Favorites() {
    const favoritesCTX = useContext(FavoritesContext);

    let content;

    if (favoritesCTX.totalFavorites === 0) {
        content = <p>You got no favorites yet</p>
    } else {
        content = <PostList posts = {favoritesCTX.favorites}/>
    }

    return (
        <section className="container w-75">
            <h1 className="text-center mt-5 text-danger">Favorites</h1>
            {content}
        </section>
    )

}

export default Favorites;