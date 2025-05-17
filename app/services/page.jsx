import React from "react";

export const metadata = {
  title: "Boundless Bolt | Professional Web Development & Automation Services",
  description:
    "Explore Boundless Bolt’s full suite of services, including bot development, Web3 solutions, API integration, backend/frontend development, automation systems, SaaS, Shopify, and advanced SEO. Tailored solutions to grow your brand and boost performance.",
  openGraph: {
    title:
      "Boundless Bolt | Professional Web Development & Automation Services",
    description:
      "Explore Boundless Bolt’s full suite of services, including bot development, Web3 solutions, API integration, backend/frontend development, automation systems, SaaS, Shopify, and advanced SEO. Tailored solutions to grow your brand and boost performance.",
  },
};
  

const services = [
  {
    title: "Bot Development",
    description: "Custom bots to automate, engage, and grow.",
    icon: "🤖",
  },
  {
    title: "Web3 Bot Development",
    description: "Blockchain-savvy bots for the decentralized future.",
    icon: "🔗",
  },
  {
    title: "API Development",
    description: "Robust APIs powering dynamic connections.",
    icon: "🔌",
  },
  {
    title: "Backend Development",
    description: "Scalable, secure, and efficient server solutions.",
    icon: "🛠️",
  },
  {
    title: "Frontend Development",
    description: "Stunning, responsive user interfaces.",
    icon: "🎨",
  },
  {
    title: "Automation Systems",
    description: "End-to-end automation for ultimate efficiency.",
    icon: "⚡",
  },
  {
    title: "SaaS Development",
    description: "Launch and scale your software-as-a-service ideas.",
    icon: "☁️",
  },
  {
    title: "Web Development",
    description: "Full-cycle web design and development.",
    icon: "🌐",
  },
  {
    title: "Shopify Development",
    description: "Ecommerce customization & growth solutions.",
    icon: "🛒",
  },
  {
    title: "Website SEO Optimization",
    description: "Get found. Grow faster.",
    icon: "🚀",
  },
  {
    title: "Technical SEO",
    description: "Advanced tactics for superior rankings.",
    icon: "🔍",
  },
  {
    title: "Web Design",
    description: "Eye-catching aesthetics, seamless usability.",
    icon: "✨",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#39aeb9]">
        Our Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-[#111418] border border-[#39aeb9] rounded-xl p-7 flex flex-col items-center text-center shadow-xl hover:shadow-cyan-400/30 transition"
          >
            <span className="mb-4 text-4xl">{service.icon}</span>
            <h2 className="font-bold text-xl text-[#39aeb9] mb-2">
              {service.title}
            </h2>
            <p className="text-[#c9d1d4] opacity-90 text-base">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
