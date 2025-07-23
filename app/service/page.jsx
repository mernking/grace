import ServiceCard from "@/components/fragments/ServiceCard";
import React from "react";
import Link from "next/link";

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

const serviceData = [
  {
    image: "/service/web.svg",
    title: "Web Development",
    alt: "image of website development service",
    content:
      "I deliver full-cycle web design and development—from wireframes to deployment—creating fast, secure, and scalable websites that look great, perform flawlessly, and drive real business results.",
  },
  {
    image: "/service/bot.svg",
    title: "Bot Development",
    alt: "image of bot development service",
    content:
      "I build custom bots that do more than just automate; they help you connect with users, streamline workflows, and grow faster. From handling repetitive tasks to creating smoother user journeys, these bots are built to save time and make things work smarter.",
  },
  {
    image: "/service/web3.svg",
    title: "Web3 Bot Development",
    alt: "image of web3 bot development service",
    content:
      "I build blockchain savvy bots that go beyond automation helping you interact with decentralized apps, manage on-chain actions, and engage users in the Web3 space. Smart, reliable, and ready for the future of the internet.",
  },
  {
    image: "/service/api.svg",
    title: "API Development",
    alt: "image of api development service",
    content:
      "I build robust APIs that power smooth, secure, and dynamic connections making it easy for apps, platforms, and users to interact seamlessly. Behind every great experience is a system that just works.",
  },
  {
    image: "/service/backend.png",
    title: "Backend Development",
    alt: "image of backend development service",
    content:
      "I design scalable, secure, and efficient server solutions that keep your applications running smoothly, built to handle load, safeguard data, protect your data, and grow with your business.",
  },
  {
    image: "/service/frontend.svg",
    title: "Frontend Development",
    alt: "image of frontend development service",
    content:
      "I craft stunning, responsive user interfaces that engage users, adapt seamlessly to any device, and elevate your brand—built for performance, accessibility, and long-term scalability.",
  },
  {
    image: "/service/auto.svg",
    title: "Automation Systems",
    alt: "image of automation system service",
    content:
      "I build end-to-end automated systems that streamline operations, eliminate manual tasks, and boost productivity—designed to scale with your business and deliver consistent, error-free performance.",
  },
  {
    image: "/service/sass.svg",
    title: "SaaS Development",
    alt: "image of sass development service",
    content:
      "I help you launch and scale powerful SaaS products—from idea to deployment—built with robust architecture, seamless user experiences, and the flexibility to grow with your customers and market demands.",
  },
  {
    image: "/service/shop.svg",
    title: "Shopify Development",
    alt: "image of shopify development service",
    content:
      "I create tailored ecommerce solutions that boost conversions, enhance user experience, and support growth—built for seamless checkout, personalized features, and scalable performance at every stage.",
  },
  {
    image: "/service/seo.svg",
    title: "Website SEO Optimization",
    alt: "image of website seo optimization service",
    content:
      "I help your brand get discovered and grow faster with data-driven SEO, strategic content, and performance marketing—designed to increase visibility, attract the right audience, and drive sustainable growth.",
  },
  {
    image: "/service/tech-seo.svg",
    title: "Technical SEO",
    alt: "image of technical seo service",
    content:
      "I implement advanced SEO strategies that elevate your search rankings, increase organic traffic, and outpace competitors—built on technical optimization, smart content, and continuous performance tracking.",
  },
  {
    image: "/service/web-design.svg",
    title: "Web Design",
    alt: "image of web design service",
    content:
      "I design visually striking interfaces that captivate users and deliver seamless usability—combining modern aesthetics, intuitive navigation, and responsive design to elevate every interaction.",
  },
];

export default function ServicesPage() {
  return (
    <div className="w-full flex flex-col gap-3 p-2">
      <h1 className="font-bold capitalize text-3xl text-center">service</h1>
      <div className="w-full gap-5 grid grid-cols-1 md:grid-cols-3">
        {serviceData.map((data, index) => (
          <ServiceCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
