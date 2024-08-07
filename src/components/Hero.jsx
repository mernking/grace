import React from "react";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <div className="w-full">
      {/* <div className="nav">
        <Navbar />
      </div> */}
      <div className="hero h-full">
        <div className="w-full h-full text-center flex flex-col justify-center items-center gap-1">
          <h1 className="font-grace text-3xl sm:text-6xl">BOUNDLESS BOLT</h1>
          <p className="font-grace">Digital Agency</p>
        </div>
      </div>
    </div>
  );
}
