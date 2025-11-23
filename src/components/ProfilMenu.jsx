import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { loginAvatar } from '../utils/Constant';
import { useSelector } from 'react-redux';
import Netflix_Symbol from "../assets/images/Netflix_Symbol.png";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((store) => store.user)

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  const handleSignOut = () => {
    // Replace with actual logic
    signOut(auth).then(() => {
  // Sign-out successful.

}).catch((error) => {
  // An error happened.
  console.log(error.message);

});
  };

  return (
    <div className="relative inline-block text-left text-black">
      {/* Profile icon/image */}
      <button onClick={toggleDropdown} className="rounded-full focus:outline-none cursor-pointer h-full">
        <img
          src={Netflix_Symbol}
          alt="Profile"
          className="h-20 border hover:scale-105 transition"
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-50 bg-slate-100 rounded-md shadow-lg z-50 cursor-pointer">
        <h1 className='font-semibold p-3'>Welcome, <span className='text-red-500'>{user.displayName}</span></h1>
          <button
            onClick={handleSignOut}
            className="w-10/12 m-2 px-4 py-2 text-left hover:bg-red-100 border rounded-2xl cursor-pointer hover:font-bold"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
