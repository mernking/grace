"use client";
import React from "react";
import { GoDatabase } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { GoRocket } from "react-icons/go";
import { SiChainlink } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { SiOpenai } from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";
import { FaRobot } from "react-icons/fa6";

export default function Service() {
  const services = [
    {
      icon: <SiOpenai />,
      title: "AI Automation",
      description:
        "Streamline your business operations with intelligent AI-powered automation solutions that reduce manual work, increase efficiency, and drive growth.",
    },
    {
      icon: <HiSparkles />,
      title: "Agentic AI Development",
      description:
        "Build sophisticated autonomous AI systems that can reason, plan, and execute complex tasks independently with cutting-edge agentic AI technology.",
    },
    {
      icon: <FaRobot />,
      title: "AI Agents Development",
      description:
        "Create intelligent AI agents that interact, learn, and adapt to your business needs, providing personalized and context-aware solutions.",
    },
    {
      icon: <GoDatabase />,
      title: "Backend Development",
      description:
        "Reliable backend development services that power your applications with smooth performance, strong security, and easy scalability.",
    },
    {
      icon: <CgWebsite />,
      title: "Frontend Development",
      description:
        "Creating visually stunning, user-friendly interfaces, ensuring a seamless and engaging experience across all devices.",
    },
    {
      icon: <GoRocket />,
      title: "Website Optimization",
      description:
        "Boost your site's speed, improve performance, and enhance user experience, ensuring faster load times and higher search rankings.",
    },
    {
      icon: <SiChainlink />,
      title: "Blockchain Development",
      description:
        "Build secure, decentralized applications, leveraging blockchain technology for transparent, scalable, and innovative solutions.",
    },
    {
      icon: <TbDeviceMobileCode />,
      title: "Multiplatform App Development",
      description:
        "Create seamless, high-quality applications that work across various devices and operating systems, ensuring a consistent user experience everywhere.",
    },
  ];

  return (
    <section
      id="service"
      className="px-3 py-16 w-full flex gap-2 flex-col justify-center items-center"
    >
      <div className="title text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
          Our Services
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Comprehensive AI and development solutions tailored to transform your
          business
        </p>
      </div>

      <div className="servicegrid w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="gridcard glass-strong rounded-2xl p-6 w-full flex flex-col justify-start items-center card-hover shadow-premium group hover:scale-105 transition-transform duration-300"
          >
            <div className="image h-[80px] w-[80px] flex justify-center items-center text-5xl rounded-2xl bg-primary-purple p-4 mb-4 shadow-premium-lg group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <div className="nametitle font-extrabold text-xl mb-3 text-center">
              <p className="text-white group-hover:text-primary-purple transition-colors">
                {service.title}
              </p>
            </div>
            <div className="comment text-center text-gray-400 text-sm leading-relaxed">
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 hover:scale-105 active:scale-95 transition-transform duration-200">
        <a
          href="/contact"
          className="inline-block px-10 py-4 rounded-xl text-center font-semibold bg-primary-purple hover:bg-primary-purple-dark shadow-premium-lg hover-glow transition-all text-lg"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
}
