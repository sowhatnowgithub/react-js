import MovieCard from "../components/movieCard";
import "../css/Home.css";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQeury] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("SomeErrorCame, movies didn't load");
        console.log(error);
      } finally {
        setLoading(false);
        console.log(loading + "The movies are requested from the api");
      }
    };
    loadPopularMovies();
  }, []);
  async function handleSearch() {
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const loadedMovies = await searchMovies(searchQuery);
      setMovies(loadedMovies);
    } catch (err) {
      console.log(err);
      setError("Error searching for the images");
    } finally {
      setLoading(false);
    }
    setSearchQeury("");
  }
  return (
    <>
      <div className="Home">
        <form
          onSubmit={(e) => {
            handleSearch();
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search For Movies"
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQeury(e.target.value)}
          ></input>
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map((movie) => {
              return (
                movie.title.toLowerCase().startsWith(searchQuery) && (
                  <MovieCard movie={movie} key={movie.id}></MovieCard>
                )
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
