import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/Constant";
import { addNowPopularMovies } from "../../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const nowPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPopularMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    nowPopular();
  }, []);
};

export default usePopularMovies;
