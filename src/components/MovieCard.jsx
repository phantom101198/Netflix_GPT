import React from "react";
import { POSTER_CDN_URL } from "../utils/Constant";

const MovieCard = ({posterPath, title, name}) => {
  if (!posterPath) return;
  return (
    <div className="text-white w-50 my-4 p-2 ">
      <div className="w-32 h-64 cursor-pointer hover:scale-105 transition duration-200 ">
        <img
          className="rounded-md"
          alt="movie-card"
          src={POSTER_CDN_URL + posterPath}
        />
        {title&&<p>{title}</p>}
        {name&&<p>{name}</p>}
      </div>
    </div>
  );
};

export default MovieCard;
