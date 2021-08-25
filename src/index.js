import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import {FavoritesContextProvider} from "./state-store/favorites-context";

ReactDOM.render(
    <FavoritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoritesContextProvider>,

    document.getElementById('root')
);

