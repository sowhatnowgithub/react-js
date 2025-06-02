import Popular from "../components/PopularAnime";
import "./../css/Home.css";
import { useState } from "react";
import { searchAnime } from "../services/api";
import AnimeCard from "../components/AnimeCard";
export default function HomePage() {
  const [animes, setAnime] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isloading, setLoading] = useState(true);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const search_anime = await searchAnime(searchQuery);
      const filtered_anime = search_anime.filter((anime) => {
        return anime.rating != "Rx - Hentai";
      });
      setAnime(filtered_anime);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };
  function goToPopular() {
    setLoading(true);
    setSearchQuery("");
  }

  return (
    <>
      <div className="search-wrapper">
        {" "}
        <form
          onSubmit={(e) => {
            handleSearch();
            e.preventDefault();
          }}
          role="search"
        >
          <label htmlFor="search"></label>{" "}
          <input
            id="search"
            type="search"
            placeholder="Search for Anime..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            autoFocus
            required
          />
          <button type="submit">Go</button>{" "}
        </form>
      </div>
      <div className="container-eg-btn-3">
        <button
          className="button
      button-7"
          onClick={goToPopular}
        >
          Popular Anime
        </button>
      </div>
      {isloading ? (
        <Popular></Popular>
      ) : (
        <div class="anime-grid">
          {animes.map((anime) => {
            return <AnimeCard key={anime.mal_id} anime={anime} />;
          })}
        </div>
      )}
    </>
  );
}
