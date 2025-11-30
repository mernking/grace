"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import PortfolioCard from "./fragments/PortfolioCard";
import data from "@/components/data/portfolio";

export default function Portfolio() {
  const limit = 3;

  return (
    <section
      id="portfolio"
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
          Featured Projects
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Showcasing our expertise in AI automation, intelligent systems, and
          cutting-edge development
        </p>
      </motion.div>

      <div className="portgrid w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, limit).map((item, index) => (
          <PortfolioCard key={index} item={item} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full mt-8 flex justify-center"
      >
        <Link
          className="inline-block px-10 py-4 rounded-xl text-center font-semibold glass-strong hover-glow transition-all text-lg"
          href="/projects"
        >
          View All Projects
        </Link>
      </motion.div>
    </section>
  );
}
