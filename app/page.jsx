import Image from "next/image";
import Link from "next/link";
import React from "react";
import ServiceCard from "@/components/fragments/ServiceCard";
import ProjectCard from "@/components/fragments/ProjectCard";

export default function HomePage() {
  const serviceData = [
    {
      image: "/images/service/web.svg",
      title: "Web Development",
      alt: "image of website development service",
      content:
        "I deliver full-cycle web design and development—from wireframes to deployment—creating fast, secure, and scalable websites that look great, perform flawlessly, and drive real business results.",
    },
    {
      image: "/images/service/auto.svg",
      title: "Automation Systems",
      alt: "image of automation system service",
      content:
        "I build end-to-end automated systems that streamline operations, eliminate manual tasks, and boost productivity—designed to scale with your business and deliver consistent, error-free performance.",
    },
    {
      image: "/images/service/api.svg",
      title: "API Development",
      alt: "image of api development service",
      content:
        "I build robust APIs that power smooth, secure, and dynamic connections making it easy for apps, platforms, and users to interact seamlessly. Behind every great experience is a system that just works.",
    },
    {
      image: "/images/service/bot.svg",
      title: "Bot Development",
      alt: "image of bot development service",
      content:
        "I create intelligent bots and automated workflows that handle repetitive tasks, customer interactions, and business processes—freeing up your time to focus on what matters most.",
    },
    {
      image: "/images/service/shop.svg",
      title: "Shopify Development",
      alt: "image of shopify development service",
      content:
        "I create tailored ecommerce solutions that boost conversions, enhance user experience, and support growth—built for seamless checkout, personalized features, and scalable performance at every stage.",
    },
    {
      image: "/images/service/sass.svg",
      title: "SaaS Development",
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
      name: "Sarah Johnson",
      country: "United States",
      comment:
        "Exceptional work quality and attention to detail. The automation system delivered exceeded our expectations and significantly improved our workflow efficiency.",
    },
    {
      image: "/demo.png",
      name: "Marcus Chen",
      country: "Singapore",
      comment:
        "Professional, reliable, and innovative solutions. The API integration was seamless and the documentation was comprehensive. Highly recommend for any technical project.",
    },
    {
      image: "/demo.png",
      name: "Emma Rodriguez",
      country: "Canada",
      comment:
        "Outstanding SaaS development expertise. The platform launched on time, within budget, and has been running flawlessly. Great communication throughout the project.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight">
              Transform Ideas Into{" "}
              <span className="text-primary">Cutting-Edge</span> Technology
            </h1>
            <p className="text-lg md:text-xl text-text/70 leading-relaxed max-w-2xl">
              Full-stack development, automation, and tailored solutions to take
              your business further. Let's build something extraordinary
              together.
            </p>
            <Link href="/contact">
              <button className="bg-primary text-background px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Your Project
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <Image
              className="relative w-full h-auto object-contain"
              src="/home/hero.svg"
              alt="Professional development services illustration"
              width={600}
              height={500}
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Services
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Comprehensive development solutions tailored to your business
              needs
            </p>
          </div>

          {/* Mobile: Show 3 services */}
          <div className="grid grid-cols-1 md:hidden gap-6 mb-8">
            {serviceData.slice(0, 3).map((data, index) => (
              <ServiceCard key={index} data={data} />
            ))}
          </div>

          {/* Desktop: Show all services */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {serviceData.map((data, index) => (
              <ServiceCard key={index} data={data} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/images/service">
              <button className="border-2 border-secondary text-text px-8 py-3 rounded-lg hover:bg-secondary/10 transition-all duration-200 font-medium">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              Here are a few projects we've worked on that showcase our
              expertise
            </p>
          </div>

          <div className="space-y-12">
            {/* Featured Project */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <Image
                    className="w-full aspect-video object-cover rounded-xl shadow-md"
                    alt="Featured project showcase"
                    src="/demo.png"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="order-1 md:order-2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-text">
                    E-commerce Automation Platform
                  </h3>
                  <p className="text-text/70 leading-relaxed">
                    Automation SaaS for online shops—Shopify & WooCommerce
                    integration with 24/7 automated operations, inventory
                    management, and customer engagement workflows.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["Automation", "E-commerce", "Shopify", "SaaS"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="bg-background border border-secondary px-4 py-2 rounded-full text-sm font-medium text-text/80"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                  <Link href="#" className="inline-block">
                    <span className="text-primary font-semibold hover:underline cursor-pointer">
                      View Project Details →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Other Projects Grid */}
            <div className="grid grid-cols-1 md:hidden gap-6">
              {projectData.slice(0, 1).map((data, index) => (
                <ProjectCard key={index} data={data} />
              ))}
            </div>

            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
              {projectData.map((data, index) => (
                <ProjectCard key={index} data={data} />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <button className="border-2 border-secondary text-text px-8 py-3 rounded-lg hover:bg-secondary/10 transition-all duration-200 font-medium">
                View All Projects
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-text/70 max-w-2xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonyData.map((data, index) => (
              <div
                key={index}
                className="bg-background border border-secondary rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                    src={data.image}
                    alt={`${data.name} testimonial`}
                    width={64}
                    height={64}
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-text">
                      {data.name}
                    </h4>
                    <p className="text-text/60 text-sm">{data.country}</p>
                  </div>
                </div>
                <blockquote className="text-text/80 leading-relaxed italic">
                  "{data.comment}"
                </blockquote>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonial">
              <button className="border-2 border-secondary text-text px-8 py-3 rounded-lg hover:bg-secondary/10 transition-all duration-200 font-medium">
                Read More Reviews
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-secondary rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-lg text-text/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together.
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-primary text-background px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-200 shadow-lg">
                  Start Your Project
                </button>
              </Link>
              <Link href="/projects">
                <button className="border-2 border-secondary text-text px-8 py-4 rounded-lg hover:bg-secondary/10 transition-all duration-200 font-medium">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
