import React, { useRef } from "react";
import lang from "../../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import ai from "../../utils/GenAi";
import { API_OPTIONS } from "../../utils/Constant";
import { addGptMovieResults } from "../../utils/GptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    return json.results
  };

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });
    // console.log(response.text);
    const gptMovies = response.text.split(",");
    const finalGptMovies = gptMovies.map((movie) => movie.trim());

    // console.log(finalGptMovies);

    const promiseArray = finalGptMovies.map((movie) => searchMovieTMDB(movie));

    // console.log("promiseArray: " + promiseArray);

    // const tmdbResults = await Promise.all(promiseArray);
    const tmdbResults = await Promise.all(promiseArray);

    // console.log("tmdbResults: " + tmdbResults);

    dispatch(
      addGptMovieResults({
        movieNames: finalGptMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="flex justify-center mt-20 md:mt-0">
      <form
        className="grid grid-cols-12 md:w-1/2 w-full h-20 bg-white/10 p-4 mx-2 md:mx-0 rounded-2xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="col-span-9 text-white bg-black/60  mr-4 px-5 md:text-xl font-semibold rounded-full hover:bg-black/80 focus:bg-black/80 focus:border-none" 
        />
        <button
          className="bg-red-700 text-white col-span-3 cursor-pointer hover:bg-red-800 md:text-xl font-semibold rounded-full"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
