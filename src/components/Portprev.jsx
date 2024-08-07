import React from "react";
import Image from "next/image";
import "./css/portfolio.css";
export default function Portprev() {
  return (
    <div className="flex flex-col">
      <div className="title text-center pb-3">
        <h1 className="font-grace">Portfolio</h1>
      </div>
      <div className="portcard_container w-full gap-2 flex flex-wrap justify-center">
        <div className="portcard overflow-hidden w-[250px] h-[350px] rounded-lg flex flex-col justify-center items-center">
          <div className="w-full h-[175px] relative">
            <Image
              className="object-cover"
              src="/portfolio/test.jpg"
              alt="image"
              layout="fill"
            />
          </div>
          <div className="cardtitle text-center py-2">
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
          </div>
        </div>
        <div className="portcard overflow-hidden w-[250px] h-[350px] rounded-lg flex flex-col justify-center items-center">
          <div className="w-full h-[175px] relative">
            <Image
              className="object-cover"
              src="/portfolio/test.jpg"
              alt="image"
              layout="fill"
            />
          </div>
          <div className="cardtitle text-center py-2">
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
          </div>
        </div>
        <div className="portcard overflow-hidden w-[250px] h-[350px] rounded-lg flex flex-col justify-center items-center">
          <div className="w-full h-[175px] relative">
            <Image
              className="object-cover"
              src="/portfolio/test.jpg"
              alt="image"
              layout="fill"
            />
          </div>
          <div className="cardtitle text-center py-2">
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
          </div>
        </div>
        <div className="portcard overflow-hidden w-[250px] h-[350px] rounded-lg flex flex-col justify-center items-center">
          <div className="w-full h-[175px] relative">
            <Image
              className="object-cover"
              src="/portfolio/test.jpg"
              alt="image"
              layout="fill"
            />
          </div>
          <div className="cardtitle text-center py-2">
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
          </div>
        </div>
        <div className="portcard overflow-hidden w-[250px] h-[350px] rounded-lg flex flex-col justify-center items-center">
          <div className="w-full h-[175px] relative">
            <Image
              className="object-cover"
              src="/portfolio/test.jpg"
              alt="image"
              layout="fill"
            />
          </div>
          <div className="cardtitle text-center py-2">
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
          </div>
        </div>
        <div className="portcard overflow-hidden w-[250px] h-[350px] rounded-lg flex flex-col justify-center items-center">
          <div className="w-full h-[175px] relative">
            <Image
              className="object-cover"
              src="/portfolio/test.jpg"
              alt="image"
              layout="fill"
            />
          </div>
          <div className="cardtitle text-center py-2">
            <h3>Lorem ipsum dolor sit amet, consectetur</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
