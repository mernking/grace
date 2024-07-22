import React from "react";
import Link from "next/link";
import "./css/newsletter.css";

export default function Footer() {
  return (
    <footer className="py-8 flex flex-col justify-center items-center overflow-x-hidden w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="px-2">
          <div className="logo_sec hover:underline hover:text-primary transition-all font-grace text-3xl">
            <h1>GRACE</h1>
          </div>
          <div className="mission">
            <p>
              Our mission is to deliver exceptional results and continuously
              improve. We strive to exceed expectations and provide value
              through innovation and dedication.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-center mb-4">menu</h3>
          <div className="text-center w-full flex flex-col gap-2 px-5 py-2">
            <Link
              className="hover:underline hover:text-accent transition-all"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:underline hover:text-accent transition-all"
              href="/about"
            >
              About
            </Link>
            <Link
              className="hover:underline hover:text-accent transition-all"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="hover:underline hover:text-accent transition-all"
              href="/portfolio"
            >
              Portfio
            </Link>
            <Link
              className="hover:underline hover:text-accent transition-all"
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className="hover:underline hover:text-accent transition-all"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <div class="card">
            <span class="card__title">Subscribe</span>
            <p class="card__content">
              Get fresh updates delivered straight to your inbox every week to
              keep your business in the best possible shape.
            </p>
            <div className="card__form">
              <input placeholder="Your Email" type="text" />
              <button class="sign-up"> Sign up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        &copy; 2024 GRACE. All rights reserved.
      </div>
    </footer>
  );
}
