import React from "react";
import Image from "next/image";
import ProjectCard from "@/components/fragments/ProjectCard";

export const metadata = {
  title: "Boundless Bolt portfolio | Portfolio of Web, Automation & SEO Projects",
  description:
    "Explore Boundless Bolt’s portfolio showcasing high-impact web development, automation systems, digital marketing, and SEO projects. See how we deliver innovative solutions that drive measurable results for our clients.",
  openGraph: {
    title: "Boundless Bolt | Portfolio of Web, Automation & SEO Projects",
    description:
      "Explore Boundless Bolt’s portfolio showcasing high-impact web development, automation systems, digital marketing, and SEO projects. See how we deliver innovative solutions that drive measurable results for our clients.",
  },
};

const portfolioItems = [
  {
    title: "Mobile SaaS Platform",
    description: "Multi-tenant SaaS app for remote project management.",
    image: "/demo.png",
    tags: ["Mobile", "SaaS"],
    url: "#",
  },
  {
    title: "SEO Analyzer Tool",
    description: "Deep audits, ranking health, and automated SEO ops.",
    image: "/demo.png",
    tags: ["SEO", "Automation"],
    url: "#",
  },
  {
    title: "Shopify Theme Custom",
    description: "Conversion-optimized Shopify theme & advanced filtering.",
    image: "/demo.png",
    tags: ["Shopify", "Frontend"],
    url: "#",
  },
  {
    title: "Mobile SaaS Platform",
    description: "Multi-tenant SaaS app for remote project management.",
    image: "/demo.png",
    tags: ["Mobile", "SaaS"],
    url: "#",
  },
  {
    title: "SEO Analyzer Tool",
    description: "Deep audits, ranking health, and automated SEO ops.",
    image: "/demo.png",
    tags: ["SEO", "Automation"],
    url: "#",
  },
  {
    title: "Shopify Theme Custom",
    description: "Conversion-optimized Shopify theme & advanced filtering.",
    image: "/demo.png",
    tags: ["Shopify", "Frontend"],
    url: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <ProjectCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
