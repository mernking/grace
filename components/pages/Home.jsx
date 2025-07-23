import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServiceCard from "../fragments/ServiceCard";
import ProjectCard from "../fragments/ProjectCard";

export default function HomePage() {
  const serviceData = [
    {
      image: "/service/web.svg",
      title: "Web development",
      alt: "image of website development service",
      content:
        "I deliver full-cycle web design and development—from wireframes to deployment—creating fast, secure, and scalable websites that look great, perform flawlessly, and drive real business results.",
    },
    {
      image: "/service/auto.svg",
      title: "Automation Systems",
      alt: "image of automation system service",
      content:
        "I build end-to-end automated systems that streamline operations, eliminate manual tasks, and boost productivity—designed to scale with your business and deliver consistent, error-free performance.",
    },
    {
      image: "/service/api.svg",
      title: "API Development",
      alt: "image of api development service",
      content:
        "I build robust APIs that power smooth, secure, and dynamic connections making it easy for apps, platforms, and users to interact seamlessly. Behind every great experience is a system that just works.",
    },
    {
      image: "/service/bot.svg",
      title: "bot development",
      alt: "image of bot development service",
      content:
        "I deliver full-cycle web design and development—from wireframes to deployment—creating fast, secure, and scalable websites that look great, perform flawlessly, and drive real business results.",
    },
    {
      image: "/service/shop.svg",
      title: "Shopify Development",
      alt: "image of shopify development service",
      content:
        "I create tailored ecommerce solutions that boost conversions, enhance user experience, and support growth—built for seamless checkout, personalized features, and scalable performance at every stage.",
    },
    {
      image: "/service/sass.svg",
      title: "sass development",
      alt: "image of sass development service",
      content:
        "I help you launch and scale powerful SaaS products—from idea to deployment—built with robust architecture, seamless user experiences, and the flexibility to grow with your customers and market demands.",
    },
  ];

  const projectData = [
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

  const testimonyData = [
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
    {
      image: "/demo.png",
      name: "demo name",
      country: "demo state",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non augue vel est fermentum efficitur. Sed in lacus vel lorem posuere imperdiet. Curabitur dapibus, nisl vel malesu",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-col-reverse md:flex-row p-2">
        <div className="w-full h-[45vh] capitalize flex flex-col justify-center items-start gap-5">
          <h1 className="md:text-5xl text-3xl font-bold">
            transform ideas into cutting edge technology
          </h1>
          <p>
            Full-stack development, automation, and tailored solutions to take
            your business further
          </p>
          <Link
            className="hover:text-primary w-fit transition cursor-pointer"
            href={"/contact"}
          >
            <button className="border capitalize rounded-md px-4 py-2 cursor-pointer">
              start here
            </button>
          </Link>
        </div>
        <div className="w-full h-fit">
          <Image
            className="w-full object-center"
            src={"/home/hero.svg"}
            alt="hero image"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 p-2">
        <h1 className="font-bold capitalize text-3xl text-center">service</h1>
        <div className="w-full gap-5 md:hidden grid grid-cols-1 md:grid-cols-3">
          {serviceData.slice(0, 3).map((data, index) => (
            <ServiceCard key={index} data={data} />
          ))}
        </div>
        <div className="w-full gap-5 hidden md:grid grid-cols-1 md:grid-cols-3">
          {serviceData.map((data, index) => (
            <ServiceCard key={index} data={data} />
          ))}
        </div>
        <div className="w-full">
          <Link href={"/service"}>
            <button className="w-full py-4 rounded-md border text-sm text-center">
              see all
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 p-2">
        <h1 className="font-bold capitalize text-3xl text-center">projects</h1>
        <p className="text-center">this are few projects wev worked on</p>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex flex-col md:flex-row gap-5 p-3 bg-accent rounded-md">
            <Image
              className="w-[400px] aspect-square object-center object-cover rounded-md"
              alt="project image 1"
              src={"/demo.png"}
              width={100}
              height={100}
            />
            <div className="w-full flex flex-col gap-3 justify-end">
              <h3 className="text-2xl font-bold capitalize">project title</h3>
              <p className="text-[13px]">
                Automation SaaS for online shops—Shopify & WooCommerce. 24/7
                auto-ops.
              </p>
              <div className="w-full flex flex-wrap gap-3">
                <button className="border rounded-full px-3 py-1 text-sm">
                  bot
                </button>
                <button className="border rounded-full px-3 py-1 text-sm">
                  ecommerce
                </button>
                <button className="border rounded-full px-3 py-1 text-sm">
                  shopify
                </button>
                <button className="border rounded-full px-3 py-1 text-sm">
                  web dev
                </button>
              </div>
              <div className="w-full">
                <Link href={"#"}>
                  <p className="font-bold underline">view project</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:hidden grid grid-cols-1 md:grid-cols-3 gap-5">
            {projectData.slice(0, 1).map((data, index) => (
              <ProjectCard key={index} data={data} />
            ))}
          </div>
          <div className="w-full hidden md:grid grid-cols-1 md:grid-cols-3 gap-5">
            {projectData.map((data, index) => (
              <ProjectCard key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <Link href={"/projects"}>
            <button className="w-full py-4 rounded-md border text-sm text-center">
              see all
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 p-2">
        <h1 className="font-bold capitalize text-3xl text-center">
          testimonial
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonyData.map((data, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-2 bg-accent p-2 rounded-md"
            >
              <div className="w-full flex flex-row gap-2 justify-center items-end">
                <Image
                  className="rounded-full aspect-square object-center object-cover"
                  src={data.image}
                  width={100}
                  height={100}
                />
                <div className="w-full flex flex-col gap-1">
                  <h1 className="text-2xl font-bold">{data.name}</h1>
                  <p>{data.country}</p>
                </div>
              </div>
              <div className="w-full text-sm">
                <p>{data.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <Link href={"/testimonial"}>
            <button className="w-full py-4 rounded-md border text-sm text-center">
              see all
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
