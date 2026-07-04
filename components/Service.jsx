"use client";
import React from "react";
import { GoDatabase } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { GoRocket } from "react-icons/go";
import { SiChainlink } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { HiSparkles } from "react-icons/hi2";
import { FaRobot } from "react-icons/fa6";
import { RiRobot2Line } from "react-icons/ri";
import Link from "next/link";

export default function Service() {
  const services = [
    {
      icon: <RiRobot2Line />,
      title: "AI Automation Infrastructure",
      url: "/contact?service=AI-Automation-Infrastructure",
      description:
        "Building background logic loops that take over high-volume manual work, shifting administrative bottlenecks into automated background processes.",
    },
    {
      icon: <HiSparkles />,
      title: "Autonomous Execution Systems",
      url: "/contact?service=Autonomous-Execution-Systems",
      description:
        "Developing structured, agentic workflows that can analyze input parameters, plan multi-step operations, and execute tasks without human oversight.",
    },
    {
      icon: <FaRobot />,
      title: "Context-Aware Operations",
      url: "/contact?service=Context-Aware-Operations",
      description:
        "Deploying specialized technical assistants that link directly into your internal databases to fetch, format, and process platform information.",
    },
    {
      icon: <GoDatabase />,
      title: "Backend & Systems Architecture",
      url: "/contact?service=Backend-Systems-Architecture",
      description:
        "Designing highly reliable server environments, optimizing database index performance, and writing secure data communication pipelines.",
    },
    {
      icon: <CgWebsite />,
      title: "Responsive Interface Engineering",
      url: "/contact?service=Responsive-Interface-Engineering",
      description:
        "Translating UI layouts into clean, highly responsive client-side views optimized for low CPU overhead and rapid interaction speed.",
    },
    {
      icon: <GoRocket />,
      title: "Full-Stack Speed Optimization",
      url: "/contact?service=Full-Stack-Speed-Optimization",
      description:
        "Auditing application execution lines to strip out rendering blocks, minimize load times, and maximize primary Core Web Vitals score lines.",
    },
    {
      icon: <SiChainlink />,
      title: "Decentralized Systems",
      url: "/contact?service=Decentralized-Systems",
      description:
        "Building verified smart contract architectures and secure, immutable ledger workflows for systems requiring zero reliance on third-party middlemen.",
    },
    {
      icon: <TbDeviceMobileCode />,
      title: "Cross-Platform Application Builds",
      url: "/contact?service=Cross-Platform-Application-Builds",
      description:
        "Deploying native-feel app builds across Android, iOS, and desktop layers from unified source codebases without sacrificing runtime efficiency.",
    },
  ];

  return (
    <section
      id="service"
      className="px-3 py-16 w-full flex gap-2 flex-col justify-center items-center"
    >
      <div className="title text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
          {/* Sub Services */}
          Technical Capabilities
        </h1>
        <p
          id="extended-capabilities-title"
          className="mt-2 text-xl font-bold tracking-tight text-slate-100 sm:text-4xl"
        >
          Engineering Specifics We Handle
        </p>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We strip out structural bloat to design, optimize, and deploy
          high-leverage business components.
        </p>
      </div>

      <div className="servicegrid w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.url}
            className="gridcard glass-strong rounded-2xl p-6 w-full flex flex-col justify-start items-center card-hover shadow-premium group hover:scale-105 transition-transform duration-300"
          >
            <div className="image h-[80px] w-[80px] flex justify-center items-center text-5xl rounded-2xl bg-primary p-4 mb-4 shadow-premium-lg group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <div className="nametitle font-extrabold text-xl mb-3 text-center">
              <p className="text-white group-hover:text-primary transition-colors">
                {service.title}
              </p>
            </div>
            <div className="comment text-center text-gray-400 text-sm leading-relaxed">
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 hover:scale-105 active:scale-95 transition-transform duration-200">
        <a
          href="/contact"
          className="inline-block px-10 py-4 rounded-xl text-center font-semibold bg-primary hover:bg-primary-dark shadow-premium-lg hover-glow transition-all text-lg"
        >
          Book Free Review
        </a>
      </div>
    </section>
  );
}
