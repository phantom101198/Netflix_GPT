import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ listTitle, movies }) => {
  return (
    <div className="">
      <h1 className="text-xl font-semibold">{listTitle}</h1>
      <div className="flex items-center overflow-x-scroll scroll-smooth hide-scrollbar">
        {movies?.map((movie) => (
          <MovieCard key={movie?.id} posterPath={movie?.poster_path} title={movie?.title} name={movie?.name}/>
        ))}
        {/* {movies?.map((movie) => {console.log(movie?.title)
        console.log(movie?.title)})} */}
      </div>
    </div>
  );
};

export default MovieList;
