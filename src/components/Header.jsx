import React, { useEffect } from "react";
import ProfileMenu from "./ProfilMenu";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { RiChatAiLine } from "react-icons/ri";
import { FaRobot } from "react-icons/fa";
import { toggleGptSeachView } from "../utils/GptSlice";
import { IoLanguage } from "react-icons/io5";
import { SUPPORTED_LANGUAGES } from "../utils/Constant";
import { changeLanguage } from "../utils/ConfigSlice";
import { IoMdArrowRoundBack } from "react-icons/io";
import Netflix_Logo from "../assets/images/Netflix_Logo.png";


const Header = () => {
  // const handleSignOutAction = () => {

  // }

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    return () => unsubscribe();
  }, []);

  const handleShowGPT = () => {
    dispatch(toggleGptSeachView());
  };

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <>
      <div className="fixed w-full from-black bg-gradient-to-b z-50 px-2 py-4 md:py-1 md:px-4 flex justify-between">
        <img
          className="w-30 md:w-47"
          src={Netflix_Logo}
          // src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
        {/* <button onClick={handleSignOutAction} className="bg-red-700 font-bold text-white px-4 py-2 my-6 rounded-full z-30 cursor-pointer">Sign Out</button> */}
        <div className="flex items-center text-white text-xs md:text-xl">
          {user && (
            <div className="flex gap-2 md:gap-4 justify-center">
              {/* <div className="flex gap-2 cursor-pointer">
                <div className=" flex items-center">GPT Search</div>
                <FaRobot className="w-10 h-10 hover:scale-105 transition" />
              </div> */}
              {showGptSearch && <div className="flex items-center gap-2 text-xl px-4 h-10 mt-2 bg-gray-500/20 hover:bg-gray-500/35 rounded-2xl transition-all duration-300">
                
                {/* LanguageChangeOptions */}

                <IoLanguage className=""/>
                <select className="" onChange={handleLanguageChange}>
                {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier} className="text-black">{lang.name}</option>)}
                </select>
              </div>}
              <button
                className="group flex gap-2 items-center text-white px-3 py-2 rounded-lg transition-all duration-300 hover:opacity-100 cursor-pointer bg-gray-500/20 hover:bg-gray-500/35"
                onClick={handleShowGPT}
              >
                {/* Text (hidden initially, shown on hover) */}
                {/* <span className="ml-2 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 origin-left whitespace-nowrap font-semibold text-xl ">
                  GPT Search
                </span> */}

                {/* Icon */}
                {showGptSearch ? <IoMdArrowRoundBack className="md:text-3xl text-xl h-full hover:scale-105 transition" /> : <FaRobot className="md:text-3xl text-xl h-full hover:scale-105 transition" />}
              </button>
              <ProfileMenu />{" "}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
