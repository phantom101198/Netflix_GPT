import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/Constant";
import { useDispatch } from "react-redux";
import { addTvSerials } from "../../utils/tvSerialSlice";

const useTvSerials = () => {
  const dispatch = useDispatch();

  const tvSerials = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTvSerials(json.results));
  };

  useEffect(() => {
    tvSerials();
  }, []);
};

export default useTvSerials;