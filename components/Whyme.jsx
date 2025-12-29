"use client";
import React from "react";
import { RiJavascriptFill, RiNextjsLine } from "react-icons/ri";
import { FaGolang, FaReact, FaNodeJs, FaPython } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoShopify } from "react-icons/bi";
import {
  SiMongodb,
  SiSolidity,
  SiOpenai,
  SiTensorflow,
  SiPytorch,
} from "react-icons/si";
import { RiHtml5Line } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa6";

export default function TechStack() {
  const technologies = [
    { icon: <SiOpenai />, name: "OpenAI / Claude" },
    { icon: <FaPython />, name: "Python & AI/ML" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <RiJavascriptFill />, name: "JavaScript" },
    { icon: <RiNextjsLine />, name: "Next.js" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <BiLogoTailwindCss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaGolang />, name: "Golang" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiSolidity />, name: "Solidity" },
    { icon: <RiHtml5Line />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <BiLogoShopify />, name: "Shopify/Liquid" },
  ];

  return (
    <section
      id="skill"
      className="px-3 py-10 w-full flex gap-2 flex-col justify-center items-center"
    >
      <div className="title text-center mb-6">
        <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
          Our Technology Stack
        </h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto">
          Cutting-edge technologies and AI frameworks for intelligent, scalable
          solutions
        </p>
      </div>

      <div className="skillgrid w-full flex flex-wrap justify-center gap-3">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="skillcontainer glass-strong rounded-xl px-4 py-3 flex items-center gap-3 hover:scale-105 transition-transform duration-200 group"
          >
            <div className="skillicon text-2xl text-white group-hover:text-primary-purple transition-colors duration-200">
              {tech.icon}
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
