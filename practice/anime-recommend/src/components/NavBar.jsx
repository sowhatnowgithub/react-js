import { Link } from "react-router-dom";
import "../css/NavBar.css";
const NavBar = () => {
  return (
    <>
      <nav>
        <div className="container-eg-btn-3">
          <Link to="/Home" className="button button-7">
            Home
          </Link>
          <Link to="/Genre" className="button button-7">
            Genre
          </Link>
          <Link to="/Manga" className="button button-7">
            Manga
          </Link>
          <Link to="/About" reloadDocument={false} className="button button-7">
            About
          </Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
// All right; I decided the nav bar will have

// Home :- with search  option and popular Anime

// Genre :- With Panel options, like genre tags

// Manga :- With Search and Popular Manga // About the site :-

// About the site:- It will have the info about how i built It
