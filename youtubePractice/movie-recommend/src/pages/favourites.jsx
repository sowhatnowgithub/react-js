import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContexts";
import MovieCard from "../components/movieCard";
function Favorites() {
  const { favourites } = useMovieContext();
  if (favourites.length !== 0) {
    return (
      <>
        <div>
          <div className="movie-grid">
            {favourites.map((favMovie) => {
              return <MovieCard movie={favMovie} key={favMovie.id}></MovieCard>;
            })}
          </div>
        </div>
      </>
    );
  } else
    return (
      <div>
        <p>Add Movies to favourites and See here</p>
      </div>
    );
}

export default Favorites;
