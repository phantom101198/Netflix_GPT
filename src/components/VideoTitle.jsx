import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";


const VideoTitle = ({ title, desc }) => {

  return (
    <div className="absolute top-0 left-0 w-full aspect-video bg-gradient-to-r from-black">
      <div className="max-w-[1280px] mx-auto pt-[15%] px-12">
        <div className="w-2/4">
          <h1 className="md:text-6xl sm:text-5xl text-2xl font-bold py-2 text-white">{title}</h1>
          <h3 className="hidden lg:flex font-semibold py-2 text-white text-sm md:text-lg">{desc}</h3>
        </div>
        <div className="flex gap-3 py-2">
          <button className="flex gap-2 items-center bg-white py-3 px-8 rounded-md font-semibold text-lg text-black hover:opacity-80 cursor-pointer">
            <FaPlay />
            Play
          </button>
          <button className="flex gap-2 items-center bg-white/20 backdrop-invert backdrop-opacity-0 text-white py-3 px-8 rounded-md font-semibold text-lg cursor-pointer">
            <IoMdInformationCircleOutline />
            More Info
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;



// import React from "react";
// import { IoMdInformationCircleOutline } from "react-icons/io";
// import { FaPlay } from "react-icons/fa";

// const VideoTitle = ({ title, desc }) => {
//   return (
//     <div className="w-screen aspect-video pt-[20%] px-24 bg-gradient-to-r from-black absolute">
//       <div className="w-2/4 ">
//         <h1 className="text-6xl font-semibold py-2 text-white">{title}</h1>
//         <h3 className="font-semibold py-2 text-white">{desc}</h3>
//       </div>
//       <div className="flex gap-3 py-2">
//         <button className="flex gap-2 items-center bg-gray-600 py-3 px-8 rounded-md font-semibold text-lg text-white hover:opacity-80">
//           <FaPlay />
//           Play
//         </button>
//         <button className="flex gap-2 items-center bg-gray-600 py-3 px-8 rounded-md font-semibold text-lg text-white">
//           <IoMdInformationCircleOutline />
//           More Info
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideoTitle;



