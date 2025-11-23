import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidationData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Form = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSignInAction = () => {
    const message = checkValidationData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    if (message) return;
    else if (!isSignInForm) {
      // Sign up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Sign up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            
          })
            .then(() => {
              const { uid, displayName, email } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      // Sign In logic here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div className="relative z-20">
      <Header />

      <div className="px-8 py-24 flex justify-center">
        <div
          className="2xl:w-3/12 sm:mx-10 2xl:mx-0 px-12 py-4 rounded-sm text-white"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <div className="py-6">
            <h2 className="font-bold text-2xl">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h2>
          </div>
          <div className="">
            <form onSubmit={(e) => e.preventDefault()}>
              {!isSignInForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Your Name"
                  className="block w-full rounded-sm px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6 mb-4 bg-inherit"
                />
              )}
              <input
                ref={email}
                type="text"
                placeholder="Email or Mobile Number"
                className="block w-full rounded-sm px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6 mb-4 bg-inherit"
              />
              <input
                ref={password}
                type="password"
                placeholder={isSignInForm ? "Password" : "Create Password"}
                className="block w-full rounded-sm px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6 mb-4 bg-inherit"
              />
              <p className="text-xs pb-4 text-red-700 font-bold">
                {errorMessage}
              </p>
              <button
                className="bg-[#e50914] hover:bg-red-700 duration-100 ease-linear cursor-pointer text-white text-sm font-semibold w-full my-1 p-1.5 rounded-sm font-semiboldbold"
                onClick={handleSignInAction}
              >
                {isSignInForm ? "Sign In" : "Sign Up"}
              </button>
            </form>
          </div>
          {isSignInForm && (
            <div>
              <p className="text-center p-2 text-sm">OR</p>
              <button className="bg-[#ffffff33] hover:bg-[#ffffff26] duration-200 ease-linear cursor-pointer text-white text-sm font-semibold w-full my-1 px-2 py-1.5 rounded-sm font-semiboldbold">
                Use a sign-in code
              </button>
              <div className="text-center p-1">
                <a
                  href="#"
                  className="text-sm text-center underline hover:text-gray-300 duration-100 ease-linear"
                >
                  Forgot password?
                </a>
              </div>
              <div className="flex m-1">
                <input type="checkbox" className="" />
                <p className="px-2 text-sm">Remember me</p>
              </div>
            </div>
          )}
          {isSignInForm && (
            <div className="flex">
              <p className="py-3 text-xs text-gray-300 font-semibold">
                New to Netflix?
              </p>
              <p
                className="hover:underline text-white text-xs px-1 py-3 cursor-pointer"
                onClick={handleIsSignInForm}
              >
                Sign up now
              </p>
            </div>
          )}
          {!isSignInForm && (
            <div className="flex">
              <p className="py-3 text-xs text-gray-300 font-semibold">
                Already Registered?
              </p>
              <p
                className="hover:underline text-white text-xs px-1 py-3 cursor-pointer"
                onClick={handleIsSignInForm}
              >
                Sign In
              </p>
            </div>
          )}
          <div className="text-[11px]">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
            <p className="text-blue-500 text-2xs underline cursor-pointer py-2">
              <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
