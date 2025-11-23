import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  if (!movies) return;

  const { original_title, overview, id } = movies[0];
  // console.log(original_title + " " + overview + " " + id);

  // return (
  //   <div className=''>
  //       <VideoTitle title={original_title} desc={overview}/>
  //       <VideoTrailer movieId={id}/>
  //   </div>
  // )
  return (
    <div className="hidden sm:block relative overflow-x-hidden bg-black">
      <VideoTitle title={original_title} desc={overview} />
      <VideoTrailer movieId={id} />
    </div>
  );
};

export default MainContainer;
