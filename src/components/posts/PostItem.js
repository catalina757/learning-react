import {useContext} from "react";
import FavoritesContext from "../../state-store/favorites-context";

function PostItem(props) {
    const favoritesCTX = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCTX.itemIsFavorite(props.id);

    function toggleFavoriteStatus() {
        if (itemIsFavorite) {
            favoritesCTX.removeFavorite(props.id);
        } else {
            favoritesCTX.addFavorite({
                id: props.id,
                image: props.image,
                title: props.title,
                body: props.body
            });
        }


    }

    return (
        <li className="my-5 d-flex align-items-center">
            <div className="container-fluid me-5">
                <img className="img-fluid" src={props.image} alt={props.title}/>
            </div>
            <div className="container-fluid">
                <h3>{props.title}</h3>
                <div>{props.body}</div>
                <button className="btn btn-outline-primary my-3" onClick={toggleFavoriteStatus}>
                    {itemIsFavorite ? "Remove from favorites" : "Add to favorites"}
                </button>
            </div>
        </li>
    );
}

export default PostItem;