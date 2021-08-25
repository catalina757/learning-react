import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites:[],
    totalFavorites: 0,
    addFavorite: (favoritePost) => {},
    removeFavorite: (postId) => {},
    itemIsFavorite: (postId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserfavorites] = useState([]);

    function addFavorite(favoritePost) {
        setUserfavorites((previousUserFavorites) => {
            return previousUserFavorites.concat(favoritePost);
        });
    }

    function removeFavorite(postId) {
        setUserfavorites(previousUserFavorites => {
            return previousUserFavorites.filter(post => postId !== post.id);
        })
    }

    function itemIsFavorite(postId) {
        return userFavorites.some(post => post.id === postId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
        itemIsFavorite: itemIsFavorite
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;