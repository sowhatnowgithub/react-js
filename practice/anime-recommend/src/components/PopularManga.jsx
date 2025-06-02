import { useState, useEffect } from "react";
import "./../css/App.css";
import { getTopManga } from "./../services/api";
import MangaCard from "./MangaCard";
export default function PopularManga() {
  const [mangas, setManga] = useState([]);
  useEffect(() => {
    const loadTopManga = async () => {
      try {
        const topManga = await getTopManga();
        setManga(topManga);
      } catch (err) {
        console.log(err);
      }
    };
    loadTopManga();
  }, []);
  return (
    <>
      <div className="anime-grid">
        {mangas.map((manga) => {
          return <MangaCard manga={manga} key={manga.mal_id}></MangaCard>;
        })}
      </div>
    </>
  );
}
