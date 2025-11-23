import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/Constant";
import { addNowPlayingMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    nowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
