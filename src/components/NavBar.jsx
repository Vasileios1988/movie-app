import {Link} from "react-router";

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <div className="nav-bar-brand">
                <Link to="/">Movie App</Link>
            </div>
            <div className="nav-bar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favourites" className="nav-link">Favourites</Link>
            </div>
        </nav>
    )
}