import React, { useEffect } from "react";
import GptSearchBar from "./GptSearchBar";
import GptSeachResults from "./GptSearchResults";
import { BG_IMG } from "../../utils/Constant";
import { useDispatch } from "react-redux";
import { clearMovieResults } from "../../utils/GptSlice";

const GptSeachBody = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(clearMovieResults());
  })

  return (
    <div className="pt-[10%]">
      <img
        src={BG_IMG}
        alt="background-image"
        className="fixed inset-0 w-full h-full object-cover -z-10"
      />
      {/* Black Overlay */}
      <div className="fixed z-0 bg-black opacity-60 inset-0" />

      {/* GptSeachBody */}
      <div className="absolute z-10 w-full">
        <GptSearchBar />
        <GptSeachResults />
      </div>
    </div>
  );
};

export default GptSeachBody;
