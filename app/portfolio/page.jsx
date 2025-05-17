import React from "react";
export const metadata = {
  title: "Boundless Bolt | Portfolio of Web, Automation & SEO Projects",
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
    title: "Ecommerce Bot Platform",
    description:
      "Automation SaaS for online shops—Shopify & WooCommerce. 24/7 auto-ops.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    tags: ["Bot", "Shopify", "SaaS", "Automation"],
    url: "#",
  },
  {
    title: "Web3 NFT Dashboard",
    description: "Buy/sell NFTs and track decentralized asset performance.",
    img: "https://images.unsplash.com/photo-1556742047-1b7deb15211a?auto=format&fit=crop&w=400&q=80",
    tags: ["Web3", "NFT", "Dashboard"],
    url: "#",
  },
  {
    title: "API Hub Portal",
    description:
      "API hub with live docs, token auth, and easy B2B integrations.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    tags: ["API", "B2B"],
    url: "#",
  },
  {
    title: "Mobile SaaS Platform",
    description: "Multi-tenant SaaS app for remote project management.",
    img: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=400&q=80",
    tags: ["Mobile", "SaaS"],
    url: "#",
  },
  {
    title: "SEO Analyzer Tool",
    description: "Deep audits, ranking health, and automated SEO ops.",
    img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=400&q=80",
    tags: ["SEO", "Automation"],
    url: "#",
  },
  {
    title: "Shopify Theme Custom",
    description: "Conversion-optimized Shopify theme & advanced filtering.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    tags: ["Shopify", "Frontend"],
    url: "#",
  },
];

export default function PortfolioPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#39aeb9]">
        Our Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div
            key={item.title}
            className="bg-[#111418] border border-[#39aeb9] rounded-xl shadow-xl flex flex-col overflow-hidden hover:shadow-cyan-400/30 transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <div className="flex-1 flex flex-col p-5">
              <h2 className="text-xl text-[#39aeb9] font-semibold mb-2">
                {item.title}
              </h2>
              <p className="flex-1 text-[#c9d1d4] mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#39aeb9] text-black text-xs font-bold px-2 py-1 rounded-full uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={item.url}
                className="mt-auto text-sm font-semibold underline text-[#39aeb9] hover:text-cyan-400"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
