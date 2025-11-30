"use client";
import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaRegCircleUp } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen px-3 w-full flex sm:flex-row gap-2 flex-col-reverse justify-center items-center relative"
    >
      <div className="nav w-full absolute left-0 top-0 z-10">
        <Navbar />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed right-4 bottom-8 z-50"
      >
        <Link
          href="#"
          className="block p-3 glass-strong rounded-full hover-glow text-2xl"
        >
          <FaRegCircleUp />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="name sm:h-full px-[4px] w-full flex flex-col justify-center items-center z-10"
      >
        <div className="named h-fit text-5xl py-2 font-bold sm:text-[80px] lg:text-[90px]">
          <h1 className="flex flex-col gap-2 gradient-text animate-gradient bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400">
            Boundless Bolt
          </h1>
        </div>

        <div className="namedetail text-center text-xl sm:text-2xl mt-4 font-semibold">
          <p className="text-gray-300">Full-Stack Development & AI Solutions</p>
        </div>

        <div className="description text-center text-base sm:text-lg mt-4 max-w-xl text-gray-400 leading-relaxed">
          <p>
            From cutting-edge AI automation and intelligent agents to modern web
            applications and blockchain solutions. We deliver comprehensive
            development services that transform your business vision into
            reality.
          </p>
        </div>

        <div className="flex flex-row py-4 justify-center items-center gap-4 text-2xl font-bold">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://x.com/davidchidev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300 p-2 glass rounded-lg"
            aria-label="x.com"
          >
            <FaXTwitter />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/mernking"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300 p-2 glass rounded-lg"
            aria-label="github"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.instagram.com/amchidavid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-pink transition duration-300 p-2 glass rounded-lg"
            aria-label="Instagram"
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://api.whatsapp.com/send?phone=2349035853253&text=Hello%20Boundless%20Bolt,%20I%20would%20like%20to%20discuss%20AI%20automation%20solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition duration-300 p-2 glass rounded-lg"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://web.facebook.com/david.chiboy.92798"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-blue transition duration-300 p-2 glass rounded-lg"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.youtube.com/@boundlessbolt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300 p-2 glass rounded-lg"
            aria-label="YouTube"
          >
            <FaYoutube />
          </motion.a>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-3 mt-6 justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto"
          >
            <Link
              className="w-full md:w-auto block px-8 py-3 rounded-xl text-center font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-premium-lg hover-glow transition-all"
              href="/contact"
            >
              Get Started
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto"
          >
            <Link
              className="w-full md:w-auto block px-8 py-3 rounded-xl text-center font-semibold glass-strong hover-glow transition-all"
              href="#service"
            >
              Our Services
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto"
          >
            <Link
              className="w-full md:w-auto block px-8 py-3 rounded-xl text-center font-semibold glass hover-glow transition-all"
              href="/projects"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
