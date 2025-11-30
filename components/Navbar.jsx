"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleMenu() {
    setOpen(!open);
  }

  const navLinks = [
    { name: "Home", href: "/#" },
    { name: "Projects", href: "/#portfolio" },
    { name: "Services", href: "/#service" },
    { name: "Skills", href: "/#skill" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <section className="w-full flex justify-center items-center relative z-50">
      <div className="max-w-[1200px] w-full">
        {/* Desktop Navbar */}
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`desktop w-full justify-between items-center px-6 py-4 flex transition-all duration-300 ${
            scrolled ? "glass-strong shadow-premium-lg" : "bg-transparent"
          }`}
        >
          <div className="logo text-2xl font-bold">
            <Link href="/">
              <h1 className="gradient-text text-3xl font-extrabold">
                Boundless Bolt
              </h1>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="navbarsection hidden md:flex items-center gap-8 text-white">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group font-medium hover:text-primary-blue transition-colors duration-300"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMenu}
              className="text-white text-3xl p-2 glass rounded-lg hover-glow"
              aria-label="Toggle menu"
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </motion.div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute w-full max-w-[1200px] glass-strong md:hidden overflow-hidden shadow-premium-lg"
            >
              <div className="flex flex-col gap-2 p-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    onClick={handleMenu}
                  >
                    <Link
                      href={link.href}
                      className="block w-full glass rounded-xl text-center text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 py-3 transition-all font-medium"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
