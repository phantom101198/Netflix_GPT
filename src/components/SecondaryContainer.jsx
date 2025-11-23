import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { BG_IMG } from "../utils/Constant";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const tvSerials = useSelector((store) => store.tvSerials);

  return (
    <div className="relative md:-top-5 top-25 z-10 mx-4 bg-black">
      {/* <h1 className='text-4xl font-bold w-full flex justify-center'>Movies</h1> */}

      <img
        src={BG_IMG}
        alt="background-image"
        className="sm:hidden fixed inset-0 w-full h-full object-cover -z-10"
      />
      {/* Black Overlay */}
      <div className="sm:hidden fixed -z-10 bg-black opacity-90 inset-0" />

      <MovieList listTitle={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList listTitle={"Popular"} movies={movies.nowPopularMovies} />
      <MovieList listTitle={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList listTitle={"Upcoming"} movies={movies.upcomingMovies} />
      <MovieList listTitle={"T.V. Serials"} movies={tvSerials.serialList} />
    </div>
  );
};

export default SecondaryContainer;
