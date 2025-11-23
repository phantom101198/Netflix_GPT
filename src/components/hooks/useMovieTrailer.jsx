import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingTrailer } from "../../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    // Trailer Video fetch
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    const trailers = json.results.filter((video) => video.type === "Trailer")
    const displayingTrailer = (trailers.length) ? trailers[0] : json.results[0];
    // console.log("displayingTrailer-");
    // console.log(displayingTrailer);
    // console.log(displayingTrailer.key);
    dispatch(addNowPlayingTrailer(displayingTrailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
