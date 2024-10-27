import { Link } from "react-router-dom";

function Menu() {
    return(
        <nav className="sticky-top navbar navbar-expand-sm bg- navbar-">
            <div className="container-fluid">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Logo</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Recipes">Rooms</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Ours">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  " to="/Contact">Contact</Link>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Menu;