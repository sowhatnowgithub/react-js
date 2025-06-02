import "./../css/AnimeCard.css";
import { useState } from "react";
export default function MangaCard({ manga }) {
  const [flipped, setFlip] = useState(false);
  function flipTheAnimeCard() {
    setFlip(!flipped);
  }
  return (
    <>
      <div className="anime-card">
        {flipped ? (
          <div className="anime-info">
            <p>Rating: {manga.score}</p>
            <p>
              Theme:{" "}
              {manga.themes.map((theme) => {
                return theme.length !== 0 ? theme.name : "Its Unique";
              })}
            </p>
            Geners:
            <ol>
              {manga.genres.map((genre) => {
                return <li key={manga.title + genre.name}>{genre.name}</li>;
              })}
            </ol>
            <p>Currently Airing: {manga.airing ? "Airing" : "Not airing"}</p>
          </div>
        ) : (
          <div className="anime-poster">
            <img
              src={manga.images?.jpg?.large_image_url}
              alt={manga.title}
            ></img>
          </div>
        )}

        <p>{manga.title}</p>
        <div className="anime-details">
          <button className="anime-details-btn" onClick={flipTheAnimeCard}>
            {flipped ? "Back" : "More Details"}
          </button>
        </div>
      </div>
    </>
  );
}
