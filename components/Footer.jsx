"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp, FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";
import { HiMail, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaXTwitter />,
      href: "https://x.com/davidchidev",
      label: "X (Twitter)",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/mernking",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/amchidavid",
      label: "Instagram",
      color: "hover:text-accent-pink",
    },
    {
      icon: <FaWhatsapp />,
      href: "https://api.whatsapp.com/send?phone=2349035853253&text=Hello%20Boundless%20Bolt,%20I%20would%20like%20to%20discuss%20AI%20automation%20solutions",
      label: "WhatsApp",
      color: "hover:text-green-400",
    },
    {
      icon: <FaFacebookF />,
      href: "https://web.facebook.com/david.chiboy.92798",
      label: "Facebook",
      color: "hover:text-primary-blue",
    },
    {
      icon: <FaYoutube />,
      href: "https://www.youtube.com/@boundlessbolt",
      label: "YouTube",
      color: "hover:text-red-500",
    },
  ];

  const footerLinks = [
    { name: "Home", href: "/#" },
    { name: "Projects", href: "/#portfolio" },
    { name: "Services", href: "/#service" },
    { name: "Technology Stack", href: "/#skill" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <section className="px-3 py-16 w-full flex gap-8 flex-col justify-center items-center border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="title text-center mb-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
          Boundless Bolt
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Transforming businesses with AI automation and intelligent solutions
        </p>
      </motion.div>

      <div className="footgrid w-full grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-strong rounded-2xl p-6 flex flex-col gap-4"
        >
          <h3 className="text-xl font-bold gradient-text">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Boundless Bolt specializes in AI automation, agentic AI development,
            and intelligent agents. We help businesses leverage cutting-edge AI
            technology to streamline operations and drive innovation.
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <HiMail className="text-primary-blue" />
              <a
                href="mailto:contact@boundlessbolt.com"
                className="hover:text-primary-blue transition"
              >
                contact@boundlessbolt.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <HiLocationMarker className="text-primary-purple" />
              <span>Global Services</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-strong rounded-2xl p-6 flex flex-col gap-4"
        >
          <h3 className="text-xl font-bold gradient-text">Quick Links</h3>
          <div className="flex flex-col gap-3">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-primary-blue transition-colors duration-300 text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Connect With Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-strong rounded-2xl p-6 flex flex-col gap-4"
        >
          <h3 className="text-xl font-bold gradient-text">Connect With Us</h3>
          <p className="text-gray-400 text-sm">
            Follow us on social media for updates, insights, and AI automation
            tips
          </p>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl p-3 glass rounded-xl ${social.color} transition-colors duration-300`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-6xl pt-8 border-t border-white/10 text-center"
      >
        <p className="text-gray-500 text-sm">
          © {currentYear} Boundless Bolt. All rights reserved. | Powered by AI
          Innovation
        </p>
      </motion.div>
    </section>
  );
}
