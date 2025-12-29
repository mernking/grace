"use client";
import Navbar from "../../components/Navbar";
import React, { useState, useMemo } from "react";
import Footer from "../../components/Footer";
import PortfolioCard from "../../components/fragments/PortfolioCard";
import data from "../../components/data/portfolio";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Extract unique tags
  const allTags = useMemo(() => {
    const tags = new Set();
    data.forEach((item) => item.tags?.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags)];
  }, []);

  // Filtered and searched data
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag =
        selectedTag === "All" || item.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  return (
    <div className="w-full flex flex-col max-w-7xl mx-auto">
      <Navbar />
      <section
        id="portfolio"
        className="px-3 py-6 w-full flex gap-4 flex-col justify-center items-center"
      >
        <div className="title text-4xl font-bold text-center">
          <h1 className="gradient-text">Projects</h1>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-3 w-full max-w-4xl justify-center items-center mt-4">
          <div className="w-full flex flex-col md:w-1/2">
            <label
              className="text-sm font-semibold text-gray-300 mb-1"
              htmlFor="search-input"
            >
              Search projects
            </label>
            <input
              id="search-input"
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full glass text-white placeholder:text-gray-500 border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-primary-purple"
            />
          </div>

          <div className="w-full flex flex-col md:w-1/3">
            <label
              className="text-sm font-semibold text-gray-300 mb-1"
              htmlFor="tag-filter"
            >
              Filter by tag
            </label>
            <select
              id="tag-filter"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full glass text-white border border-white/10 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-primary-purple bg-transparent"
            >
              {allTags.map((tag, index) => (
                <option key={index} value={tag} className="bg-black">
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="portgrid max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <PortfolioCard key={index} item={item} />
            ))
          ) : (
            <p className="text-gray-500 text-center w-full py-8">
              No projects found.
            </p>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
