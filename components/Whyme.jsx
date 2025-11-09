import React from "react";
import { RiJavascriptFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { FaGolang, FaReact } from "react-icons/fa6";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoShopify } from "react-icons/bi";
import { SiSolidity } from "react-icons/si";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";








export default function Whyme() {
  const progress = 70; // Ensure this is a valid integer between 0 and 100
  const progressStyle = {
    width: `${progress}%`,
    backgroundColor: "white",
    height: "20px",
    borderRadius: "5px",
    transition: "width 0.3s ease-in-out",
  };

  return (
    <section
      id="skill"
      className="px-3 py-2 w-full flex gap-2 flex-col justify-center items-center"
    >
      <div className="title text-2xl py-3 font-bold">
        <h1>Skills</h1>
      </div>
      <div className="skillgrid w-full grid grid-cols-2 sm:grid-cols-3 gap-2">
        {/* <div className="skillcontainer py-4 p-2 rounded-lg border-[1px]">
          <div className="proresstitle">
            <h3>Javascript</h3>
          </div>
          <div className="progress-bar-container w-full">
            <div style={progressStyle}></div>
          </div>
        </div>
        <div className="skillcontainer py-4 p-2 rounded-lg border-[1px]">
          <div className="proresstitle">
            <h3>Node, mongodb</h3>
          </div>
          <div className="progress-bar-container w-full">
            <div style={progressStyle}></div>
          </div>
        </div>
        <div className="skillcontainer py-4 p-2 rounded-lg border-[1px]">
          <div className="proresstitle">
            <h3>Html, Reactjs, Nextjs</h3>
          </div>
          <div className="progress-bar-container w-full">
            <div style={progressStyle}></div>
          </div>
        </div>
        <div className="skillcontainer py-4 p-2 rounded-lg border-[1px]">
          <div className="proresstitle">
            <h3>Vanila Css & Tailwind</h3>
          </div>
          <div className="progress-bar-container w-full">
            <div style={progressStyle}></div>
          </div>
        </div>
        <div className="skillcontainer py-4 p-2 rounded-lg border-[1px]">
          <div className="proresstitle">
            <h3>Liquid</h3>
          </div>
          <div className="progress-bar-container w-full">
            <div style={progressStyle}></div>
          </div>
        </div>
        <div className="skillcontainer py-4 p-2 rounded-lg border-[1px]">
          <div className="proresstitle">
            <h3>Solidity</h3>
          </div>
          <div className="progress-bar-container w-full">
            <div style={progressStyle}></div>
          </div>
        </div> */}

        <div className="skillcontainer py-8 p-2 flex flex-col items-center justify-center gap-3 rounded-lg border-[1px]">
          <div className="skillicon text-5xl">
            <RiJavascriptFill />
          </div>
          <div className="proresstitle">
            <h3>Javascript</h3>
          </div>
        </div>
        <div className="skillcontainer py-8 p-2 flex flex-col items-center justify-center gap-3 rounded-lg border-[1px]">
          <div className="skillicon text-5xl">
            <RiNextjsLine />
          </div>
          <div className="proresstitle">
            <h3>Next js</h3>
          </div>
        </div>
        <div className="skillcontainer py-8 p-2 flex flex-col items-center justify-center gap-3 rounded-lg border-[1px]">
          <div className="skillicon text-5xl">
            <FaReact />
          </div>
          <div className="proresstitle">
            <h3>React js</h3>
          </div>
        </div>
        <div className="skillcontainer py-8 p-2 flex flex-col items-center justify-center gap-3 rounded-lg border-[1px]">
          <div className="skillicon text-5xl">
            <BiLogoTailwindCss />
          </div>
          <div className="proresstitle">
            <h3>Tailwind</h3>
          </div>
        </div>
        <div className="skillcontainer py-8 p-2 flex flex-col items-center justify-center gap-3 rounded-lg border-[1px]">
          <div className="skillicon text-5xl flex flex-row gap-2">
            <FaNodeJs /> + <FaGolang />
          </div>
          <div className="proresstitle">
            <h3>Node js + GO</h3>
          </div>
        </div>
        <div className="skillcontainer py-8 p-2 flex flex-col items-center justify-center gap-3 rounded-lg border-[1px]">
          <div className="skillicon text-5xl">
            <SiMongodb />
          </div>
          <div className="proresstitle">
            <h3>MongoDB</h3>
          </div>
        </div>
        <div className="skillcontainer py-8 p-2 flex flex-col items-center justify-center gap-3 rounded-lg border-[1px]">
          <div className="skillicon text-5xl">
            <SiSolidity />
          </div>
          <div className="proresstitle">
            <h3>Solidity</h3>
          </div>
        </div>
        <div className="skillcontainer py-8 p-2 flex flex-col items-center justify-center gap-3 rounded-lg border-[1px]">
          <div className="skillicon text-5xl flex flex-row gap-2">
            <RiHtml5Line /> + <FaCss3Alt />
          </div>
          <div className="proresstitle">
            <h3>HTML & CSS</h3>
          </div>
        </div>
        <div className="skillcontainer py-8 p-2 flex flex-col items-center justify-center gap-3 rounded-lg border-[1px]">
          <div className="skillicon text-5xl">
            <BiLogoShopify />
          </div>
          <div className="proresstitle">
            <h3>Liquid</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
