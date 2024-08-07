import React from "react";
import Navbar from "./Navbar";
import "./css/hero.css";

export default function Hero() {
  return (
    <div className="w-full">
      {/* <div className="nav">
        <Navbar />
      </div> */}
      <div className="hero h-full">
        <div className="w-full h-full text-center flex flex-col justify-center items-center gap-1">
          <h1 className="font-grace text-3xl sm:text-6xl shadow-[0px_11px_4px_0px_#1ee1eb] rounded-md px-1">
            BOUNDLESS BOLT
          </h1>
          <p className="font-grace">Digital Agency</p>
        </div>
      </div>
    </div>
  );
}
