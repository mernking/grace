"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioCard({ item, index }) {
  return (
    <div>
      <Link legacyBehavior href={item.link} passHref>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block"
        >
          <div className="gridcard h-full glass-strong rounded-2xl overflow-hidden p-4 w-full flex flex-col card-hover shadow-premium group">
            <div className="image w-full overflow-hidden rounded-xl mb-4 relative">
              <div className="absolute inset-0 bg-primary-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                className="w-full h-48 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                alt={item.title}
                width={400}
                height={300}
                src={item.image}
              />
            </div>

            <div className="nametitle font-bold text-xl mb-2 text-center">
              <p className="text-white group-hover:text-primary-purple transition-colors">
                {item.title}
              </p>
            </div>

            <div className="comment text-center text-sm text-gray-400 mb-4 flex-grow">
              <p className="line-clamp-3">{item.description}</p>
            </div>

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {item.tags.slice(0, 6).map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs glass px-3 py-1 rounded-full text-gray-300 border border-white/10 hover:border-primary-purple/50 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 6 && (
                  <span className="text-xs glass px-3 py-1 rounded-full text-gray-400">
                    +{item.tags.length - 6}
                  </span>
                )}
              </div>
            )}
          </div>
        </a>
      </Link>
    </div>
  );
}
