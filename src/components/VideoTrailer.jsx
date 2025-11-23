import React from "react";
import useMovieTrailer from "./hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const   VideoTrailer = ({movieId}) => {

  const movieTrailer = useSelector(store => store.movies?.nowPlayingTrailer);
  useMovieTrailer(movieId);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video z-100"
        src={"https://www.youtube.com/embed/" + movieTrailer?.key + "?si=2GA_yFDIqo_FXcsf?playlist="+ movieTrailer?.key +"&loop=1&autoplay=1&mute=1&controls=0"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
