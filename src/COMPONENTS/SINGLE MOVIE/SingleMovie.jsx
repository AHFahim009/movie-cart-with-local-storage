import React, { useState } from "react";
const SingleMovie = (props) => {
  const {
    id,
    movieName,
    watchTime,
    description,
    poster,
    category,
    imdbRating,
  } = props.movie;
  const { handleWatchTime, buttonDisabled } = props;

  return (
    <div className=" col-md-6  mb-2">
      <div className="movie-card card text-center w-100 h-100  py-2 ">
        <div className="movie-poster w-50 m-auto py-2">
          <img className="w-100" src={poster} alt="" />
        </div>
        <h1>{movieName}</h1>
        <p>Description</p>
        <div className="time-rating d-flex justify-content-around">
          <p>Watch Time: {watchTime}</p>
          <p>IMDB Rating: {imdbRating}</p>
        </div>
        <div className="text-center">
          <button
            onClick={() => {
              handleWatchTime(watchTime);
            }}
            className=" btn btn-success  w-75"
            disabled={buttonDisabled}
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
