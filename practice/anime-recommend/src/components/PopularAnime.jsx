import { useState, useEffect } from "react";
import "./../css/App.css";
import { getTopAnime } from "./../services/api";
import AnimeCard from "./AnimeCard";
export default function App() {
  const [animes, setAnime] = useState([]);
  useEffect(() => {
    const loadTopAnime = async () => {
      try {
        const topAnime = await getTopAnime();
        setAnime(topAnime);
      } catch (err) {
        console.log(err);
      }
    };
    loadTopAnime();
  }, []);
  return (
    <>
      <div className="anime-grid">
        {animes.map((anime) => {
          return <AnimeCard anime={anime} key={anime.mal_id}></AnimeCard>;
        })}
      </div>
    </>
  );
}
