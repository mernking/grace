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
import { motion } from "framer-motion";

export default function TechStack() {
  const technologies = [
    {
      icon: <SiOpenai />,
      name: "OpenAI / Claude",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: <FaPython />,
      name: "Python & AI/ML",
      gradient: "from-blue-500 to-yellow-500",
    },
    {
      icon: <SiTensorflow />,
      name: "TensorFlow",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      icon: <SiPytorch />,
      name: "PyTorch",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: <RiJavascriptFill />,
      name: "JavaScript",
      gradient: "from-yellow-400 to-yellow-600",
    },
    {
      icon: <RiNextjsLine />,
      name: "Next.js",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: <BiLogoTailwindCss />,
      name: "Tailwind CSS",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      gradient: "from-green-600 to-green-800",
    },
    {
      icon: <FaGolang />,
      name: "Golang",
      gradient: "from-cyan-500 to-blue-700",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
      gradient: "from-green-500 to-green-700",
    },
    {
      icon: <SiSolidity />,
      name: "Solidity",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      icon: <RiHtml5Line />,
      name: "HTML5",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: <BiLogoShopify />,
      name: "Shopify/Liquid",
      gradient: "from-green-600 to-green-800",
    },
  ];

  return (
    <section
      id="skill"
      className="px-3 py-16 w-full flex gap-2 flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="title text-center mb-8"
      >
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
          Our Technology Stack
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Leveraging cutting-edge technologies and AI frameworks to build
          intelligent, scalable solutions
        </p>
      </motion.div>

      <div className="skillgrid w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="skillcontainer glass-strong rounded-2xl p-6 flex flex-col items-center justify-center gap-4 card-hover shadow-premium group"
          >
            <div
              className={`skillicon text-6xl text-white group-hover:scale-110 transition-transform duration-300`}
            >
              {tech.icon}
            </div>
            <div className="proresstitle text-center">
              <h3 className="text-sm font-semibold text-gray-300">
                {tech.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12 text-center max-w-3xl"
      >
        <p className="text-gray-400 text-lg leading-relaxed">
          Our team stays at the forefront of technology, continuously learning
          and adapting to deliver innovative AI-powered solutions that drive
          real business value.
        </p>
      </motion.div>
    </section>
  );
}
