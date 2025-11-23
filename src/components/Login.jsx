import React from "react";
import Header from "./Header";
import Form from "./Form";
import { BG_IMG } from "../utils/Constant";

const Login = () => {
  return (
    <div className="relative w-full min-h-screen">
      <img
        src= {BG_IMG}
        alt="background-image"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Black Overlay */}
      <div className="absolute z-10 bg-black opacity-60 inset-0" />

      {/* Header and Form */}
      <Form />
      <div className=""></div>
    </div>
  );
};

export default Login;
