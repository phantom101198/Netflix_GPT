import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from '../MovieList'
import Loading from './Loading';

const GptSearchResults = () => {

  const {movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className='text-white bg-black/70 m-4 p-4 rounded-2xl'>
      <div>
        {movieNames.map((movie, index) => <MovieList key={movie} listTitle={movie} movies={movieResults[index]} />)}
      </div>
    </div>
  )
}

export default GptSearchResults