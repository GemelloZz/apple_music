import React, { useEffect, useState } from "react";

const NewExit = ({ artist }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`);
        if (response.ok) {
          const data = await response.json();
          setSongs(data.data);
        } else {
          Error("Errore nella risposta API");
        }
      } catch (err) {
        Error("Errore nella fetch");
      }
    };

    fetchSongs();
  }, [artist]);

  return (
    <>
      {songs.slice(0, 1).map((song) => (
        <div key={song.id}>
          <img src={song.album.cover_medium} alt={song.title} className="card-img-top rounded-3" style={{ width: "100px" }} />

          <p className="text-start ms-4">{song.artist.name}</p>
        </div>
      ))}
    </>
  );
};

export default NewExit;
