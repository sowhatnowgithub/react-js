import Popular from "../components/PopularManga";
import "./../css/Home.css";
import { useState } from "react";
import { searchManga } from "../services/api";
import MangaCard from "../components/MangaCard";
export default function HomePage() {
  const [mangas, setManga] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isloading, setLoading] = useState(true);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const search_manga = await searchManga(searchQuery);
      console.log(search_manga);
      const filtered_manga = search_manga.filter((manga) => {
        return !manga.genres.some((genre) => {
          return genre.name === "Hentai" || genre.name === "Boys Love";
        });
      });
      setManga(filtered_manga);
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
        <form
          onSubmit={(e) => {
            handleSearch();
            e.preventDefault();
          }}
          role="search"
        >
          <label htmlFor="search"></label>
          <input
            id="search"
            type="search"
            placeholder="Search for Manga..."
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
          Popular Manga
        </button>
      </div>
      {isloading ? (
        <Popular></Popular>
      ) : (
        <div className="anime-grid">
          {mangas.map((manga) => {
            return <MangaCard key={manga.mal_id} manga={manga} />;
          })}
        </div>
      )}
    </>
  );
}
