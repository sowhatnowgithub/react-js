import { Link } from "react-router";
import "../css/Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
          <a href="/" className="nav-link">
            Home
          </a>
          <Link to="/favourites" className="nav-link">
            favourites
          </Link>
        </div>
      </nav>
    </>
  );
}
