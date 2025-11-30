"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import PortfolioCard from "./fragments/PortfolioCard";
import data from "./data/portfolio";

export default function Portfolio() {
  const limit = 3;

  return (
    <section
      id="portfolio"
      className="px-3 py-16 w-full flex gap-2 flex-col justify-center items-center"
    >
      <div className="title text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
          Featured Projects
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Showcasing our expertise in AI automation, intelligent systems, and
          cutting-edge development
        </p>
      </div>

      <div className="portgrid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, limit).map((item, index) => (
          <PortfolioCard key={index} item={item} index={index} />
        ))}
      </div>

      <div className="w-full mt-8 flex justify-center hover:scale-105 active:scale-95 transition-transform duration-200">
        <Link
          className="inline-block px-10 py-4 rounded-xl text-center font-semibold glass-strong hover-glow transition-all text-lg"
          href="/projects"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
