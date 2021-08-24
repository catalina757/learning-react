import { Link } from "react-router-dom";
import styles from "./MainNav.module.css";

function MainNav() {
    return (
        <header className={styles.header}>
            <h1 className="px-5 text-warning">My react app</h1>
            <nav className="my-3 px-5">
                <ul className="d-flex justify-content-end list-unstyled">
                    <li className="mx-3">
                        <Link className="text-decoration-none" to="/">All</Link>
                    </li>

                    <li className="mx-3">
                        <Link className="text-decoration-none" to="/new">New</Link>
                    </li>

                    <li className="mx-3">
                        <Link className="text-decoration-none" to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNav;