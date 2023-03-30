import React, { useState, useEffect } from "react";
import SingleMovie from "../SINGLE MOVIE/SingleMovie";

const Home = (props) => {
  const [movies, setMovies] = useState([]);
  const { handleWatchTime, buttonDisabled } = props;

  useEffect(() => {
    const loadMovies = async () => {
      const response = await fetch("data.json");
      const data = await response.json();
      setMovies(data);
    };
    loadMovies();
  }, []);
  return (
    <div>
      <div className="movie-container row">
        {movies.map((movie, index) => (
          <SingleMovie
            key={index}
            handleWatchTime={handleWatchTime}
            buttonDisabled={buttonDisabled}
            movie={movie}
          ></SingleMovie>
        ))}
      </div>
    </div>
  );
};

export default Home;
