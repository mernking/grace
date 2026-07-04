"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaInstagram, FaFacebookF, FaYoutube, FaGitlab } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp, FaGithub } from "react-icons/fa6";

export default function ContactPageJsx() {
  // Inside your main client component function:
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    const serviceQuery = searchParams.get("service");
    if (serviceQuery) {
      // 1. Map url parameters directly to the state values
      const queryMap = {
        "business-process": "Business Process Automation Systems",
        "application-performance": "Application Performance Optimization",
        "AI-Automation-Infrastructure": "AI Automation Infrastructure",
        "Autonomous-Execution-Systems": "Autonomous Execution Systems",
        "Context-Aware-Operations": "Context-Aware Operations",
        "Backend-Systems-Architecture": "Backend & Systems Architecture",
        "Responsive-Interface-Engineering": "Responsive Interface Engineering",
        "Full-Stack-Speed-Optimization": "Full-Stack Speed Optimization",
        "Decentralized-Systems": "Decentralized Systems",
        "Cross-Platform-Application-Builds":
          "Cross-Platform Application Builds",
      };

      // 2. Set the value if it exists in our map, otherwise fallback to the exact string
      const targetValue = queryMap[serviceQuery] || serviceQuery;
      setSelectedService(targetValue);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto">
      <Navbar />

      <div className="min-h-screen py-20 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to transform your business? Let&apos;s discuss how we can help
            you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-strong rounded-2xl p-8 shadow-premium">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send us a message
            </h2>

            <form
              action="https://formsubmit.co/boundlessbolt@gmail.com"
              method="POST"
              className="space-y-5"
            >
              {/* FormSubmit Configuration */}
              <input
                type="hidden"
                name="_subject"
                value={`New Contact Form Submission - Boundless Bolt - ${new Date().toLocaleString()}`}
              />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for your message! We will get back to you as soon as possible."
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="box" />
              <input
                type="hidden"
                name="_next"
                value={`${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`}
              />
              <input
                type="hidden"
                name="_cc"
                value="contact@boundlessbolt.com"
              />

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
                <p className="text-xs text-gray-500 mt-1">
                  We&apos;ll send a copy of your message to this address.
                </p>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder-gray-500"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Service of Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white bg-transparent"
                >
                  <option value="" className="bg-black text-gray-500">
                    Select a service
                  </option>
                  {/* Core Deep Dive Services */}
                  <option
                    value="Application Performance Optimization"
                    className="bg-black"
                  >
                    Application Performance Optimization
                  </option>
                  <option
                    value="Business Process Automation Systems"
                    className="bg-black"
                  >
                    Business Process Automation Systems
                  </option>

                  {/* Capability Grid Options */}
                  <option
                    value="AI Automation Infrastructure"
                    className="bg-black"
                  >
                    AI Automation Infrastructure
                  </option>
                  <option
                    value="Autonomous Execution Systems"
                    className="bg-black"
                  >
                    Autonomous Execution Systems
                  </option>
                  <option value="Context-Aware Operations" className="bg-black">
                    Context-Aware Operations
                  </option>
                  <option
                    value="Backend & Systems Architecture"
                    className="bg-black"
                  >
                    Backend & Systems Architecture
                  </option>
                  <option
                    value="Responsive Interface Engineering"
                    className="bg-black"
                  >
                    Responsive Interface Engineering
                  </option>
                  <option
                    value="Full-Stack Speed Optimization"
                    className="bg-black"
                  >
                    Full-Stack Speed Optimization
                  </option>
                  <option value="Decentralized Systems" className="bg-black">
                    Decentralized Systems
                  </option>
                  <option
                    value="Cross-Platform Application Builds"
                    className="bg-black"
                  >
                    Cross-Platform Application Builds
                  </option>
                  <option value="General Consultation" className="bg-black">
                    General Consultation
                  </option>
                </select>
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder-gray-500 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl text-center font-semibold bg-primary hover:bg-primary-dark shadow-premium-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="glass-strong rounded-2xl p-8 shadow-premium">
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-xl">
                    <HiMail className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href="mailto:boundlessbolt@gmail.com"
                      className="text-gray-400 hover:text-primary transition"
                    >
                      boundlessbolt@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-xl">
                    <HiPhone className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a
                      href="tel:+2349035853253"
                      className="text-gray-400 hover:text-primary transition"
                    >
                      +234 903 585 3253
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 glass rounded-xl">
                    <HiLocationMarker className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-400">Global Services Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-strong rounded-2xl p-8 shadow-premium">
              <h2 className="text-2xl font-bold text-white mb-6">
                Connect With Us
              </h2>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://x.com/davidchidev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-white hover:text-primary transition-all duration-200 text-2xl hover:scale-110 hover:rotate-3 active:scale-90"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://github.com/mernking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-white hover:text-primary transition-all duration-200 text-2xl hover:scale-110 hover:rotate-3 active:scale-90"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://gitlab.com/Godswork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-white hover:text-primary transition-all duration-200 text-2xl hover:scale-110 hover:rotate-3 active:scale-90"
                  aria-label="GitHub"
                >
                  <FaGitlab />
                </a>
                <a
                  href="https://www.instagram.com/davidchidev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-white hover:text-primary transition-all duration-200 text-2xl hover:scale-110 hover:rotate-3 active:scale-90"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=2349035853253&text=Hello%20Boundless%20Bolt,%20I%20would%20like%20to%20discuss%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-white hover:text-primary transition-all duration-200 text-2xl hover:scale-110 hover:rotate-3 active:scale-90"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.facebook.com/david.chiboy.92798/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-white hover:text-primary transition-all duration-200 text-2xl hover:scale-110 hover:rotate-3 active:scale-90"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.youtube.com/@boundlessbolt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl text-white hover:text-primary transition-all duration-200 text-2xl hover:scale-110 hover:rotate-3 active:scale-90"
                  aria-label="YouTube"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-strong rounded-2xl p-8 shadow-premium">
              <h2 className="text-2xl font-bold text-white mb-6">
                Business Hours
              </h2>

              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
