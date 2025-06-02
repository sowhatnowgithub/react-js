import "./../css/AnimeCard.css";
import { useState } from "react";
export default function AnimeCard({ anime }) {
  const [flipped, setFlip] = useState(false);
  function flipTheAnimeCard() {
    setFlip(!flipped);
  }
  return (
    <>
      <div className="anime-card">
        {flipped ? (
          <div className="anime-info">
            <p>Rating: {anime.score}</p>
            <p>Rated for: {anime.rating}</p>
            <p>
              Theme:{" "}
              {anime.themes.map((theme) => {
                return theme.length !== 0 ? theme.name : "Its Unique";
              })}
            </p>
            <p>
              Geners:
              <ol>
                {anime.genres.map((genre) => {
                  return <li>{genre.name}</li>;
                })}
              </ol>
            </p>
            <p>No Of Episodes: {anime.episodes}</p>
            <p>Currently Airing: {anime.airing ? "Airing" : "Not airing"}</p>
            <p>
              Trailer:
              {anime.trailer.embed_url !== null ? (
                <a href={anime.trailer.embed_url} target="_blank">
                  Play Trailer
                </a>
              ) : (
                "No Trailer "
              )}
            </p>
          </div>
        ) : (
          <div className="anime-poster">
            <img
              src={anime.images?.jpg?.large_image_url}
              alt={anime.title}
            ></img>
          </div>
        )}

        <p>{anime.title}</p>
        <div className="anime-details">
          <button className="anime-details-btn" onClick={flipTheAnimeCard}>
            {flipped ? "Back" : "More Details"}
          </button>
        </div>
      </div>
    </>
  );
}
