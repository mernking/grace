"use client";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  FaRegCircleUp,
  FaXTwitter,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa6";
import { TiInputChecked } from "react-icons/ti";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen px-3 w-full flex sm:flex-row gap-2 flex-col-reverse justify-center items-center relative"
    >
      <div className="nav w-full absolute left-0 top-0 z-50">
        <Navbar />
      </div>

      <div className="fixed right-4 bottom-8 z-50">
        <Link
          href="#"
          className="block p-3 glass-strong rounded-full hover-glow text-2xl text-white hover:text-primary-purple transition-colors"
        >
          <FaRegCircleUp />
        </Link>
      </div>

      <div className="name sm:h-full px-[4px] w-full flex flex-col justify-center items-center z-10">
        <div className="named h-fit text-5xl py-2 font-bold sm:text-[80px] lg:text-[90px]">
          <h1 className="flex flex-col gap-2 gradient-text">Boundless Bolt</h1>
        </div>

        <div className="namedetail text-center text-xl sm:text-2xl mt-4 font-semibold">
          <p className="text-gray-300">
            Building the Tech Behind Profitable, Scalable Businesses.
          </p>
        </div>

        <div className="description text-center text-base sm:text-lg mt-4 max-w-xl text-gray-400 leading-relaxed">
          <p>
            You have the vision; We handle the tech stack. <br /> Bridge the gap
            between raw ideas and measurable business revenue. Whether it’s a
            high-performance web projects or an automated AI workflow, We
            engineer systems guaranteed to scale with your success.
          </p>
          <p className="flex flex-row gap-2 justify-center items-center py-4">
            <TiInputChecked /> Scalable | <TiInputChecked />
            Revenue-Focused
          </p>
        </div>

        <div className="flex flex-row py-4 justify-center items-center gap-4 text-2xl font-bold">
          <a
            href="https://x.com/davidchidev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-purple transition-all duration-300 p-2 glass rounded-lg hover:scale-125 hover:rotate-3 active:scale-90"
            aria-label="x.com"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/mernking"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-purple transition-all duration-300 p-2 glass rounded-lg hover:scale-125 hover:rotate-3 active:scale-90"
            aria-label="github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/davidchidev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-purple transition-all duration-300 p-2 glass rounded-lg hover:scale-125 hover:rotate-3 active:scale-90"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=2349035853253&text=Hello%20Boundless%20Bolt,%20I%20would%20like%20to%20discuss%20AI%20automation%20solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-purple transition-all duration-300 p-2 glass rounded-lg hover:scale-125 hover:rotate-3 active:scale-90"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61585469555973"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-purple transition-all duration-300 p-2 glass rounded-lg hover:scale-125 hover:rotate-3 active:scale-90"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com/@boundlessbolt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary-purple transition-all duration-300 p-2 glass rounded-lg hover:scale-125 hover:rotate-3 active:scale-90"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-3 mt-6 justify-center items-center">
          <div className="w-full md:w-auto hover:scale-105 active:scale-95 transition-transform duration-200">
            <Link
              className="w-full md:w-auto block px-8 py-3 rounded-xl text-center font-semibold bg-primary-purple hover:bg-primary-purple-dark shadow-premium-lg hover-glow transition-all"
              href="/contact"
            >
              Get Started
            </Link>
          </div>
          <div className="w-full md:w-auto hover:scale-105 active:scale-95 transition-transform duration-200">
            <Link
              className="w-full md:w-auto block px-8 py-3 rounded-xl text-center font-semibold glass-strong border border-primary-purple/30 hover:border-primary-purple hover-glow transition-all"
              href="#service"
            >
              Our Services
            </Link>
          </div>
          <div className="w-full md:w-auto hover:scale-105 active:scale-95 transition-transform duration-200">
            <Link
              className="w-full md:w-auto block px-8 py-3 rounded-xl text-center font-semibold glass hover:border-white/20 hover-glow transition-all"
              href="/projects"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
