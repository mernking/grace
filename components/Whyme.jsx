"use client";
import React from "react";
import { RiJavascriptFill, RiNextjsLine, RiHtml5Line } from "react-icons/ri";
import {
  FaGolang,
  FaReact,
  FaNodeJs,
  FaPython,
  FaRust,
  FaCss3Alt,
} from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoShopify } from "react-icons/bi";
import { FaRobot } from "react-icons/fa";
import { PiFileCppDuotone } from "react-icons/pi";
import { IoCodeSlashOutline } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { AiOutlineDatabase } from "react-icons/ai";
import { SiPostgresql, SiMysql, SiQt, SiSolidity } from "react-icons/si";
import { CiDesktop, CiMobile3, CiServer } from "react-icons/ci";

export default function TechStack() {
  const technologies = [
    { icon: <PiFileCppDuotone />, name: "Cpp" },
    { icon: <IoCodeSlashOutline />, name: "C" },
    { icon: <RiJavascriptFill />, name: "JavaScript" },
    { icon: <TbBrandTypescript />, name: "TypeScript" },
    { icon: <RiNextjsLine />, name: "Next.js" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <BiLogoTailwindCss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiQt />, name: "QT" },
    { icon: <FaGolang />, name: "Golang" },
    { icon: <FaRust />, name: "Rust" },
    { icon: <CiServer />, name: "Server" },
    { icon: <CiDesktop />, name: "Desktop" },
    { icon: <CiMobile3 />, name: "Mobile" },
    { icon: <AiOutlineDatabase />, name: "Database" },
    { icon: <SiPostgresql />, name: "Postgress" },
    { icon: <SiMysql />, name: "My SQL" },
    { icon: <AiOutlineDatabase />, name: "No SQL" },
    { icon: <SiSolidity />, name: "Solidity" },
    { icon: <RiHtml5Line />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <BiLogoShopify />, name: "Shopify/Liquid" },
    { icon: <FaPython />, name: "Python & AI/ML" },
    { icon: <FaRobot />, name: "AI Agents" },
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
            <div className="skillicon text-2xl text-white group-hover:text-primary transition-colors duration-200">
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
