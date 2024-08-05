"use client";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import React from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full bg-background">
      <div className="mobile_nav w-full sm:hidden">
        <div className="w-full flex flex-row justify-between items-center py-2 px-3">
          <div className="Logo">
            <Link href="/">
              <h1 className="font-grace text-xl hover:underline hover:text-primary transition-all">
                GRACE
              </h1>
            </Link>
          </div>
          <div className="bugger_menu font-bold">
            <button onClick={handleClick}>
              <RiMenu3Fill />
            </button>
          </div>
        </div>
        {open ? (
          <div className="menu_list absolute top-9 text-center w-full flex flex-col gap-2 px-5 py-2">
            <Link
              className="hover:underline hover:text-primary transition-all"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:underline hover:text-primary transition-all"
              href="/about"
            >
              About
            </Link>
            <Link
              className="hover:underline hover:text-primary transition-all"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="hover:underline hover:text-primary transition-all"
              href="/portfolio"
            >
              Portfio
            </Link>
            <Link
              className="hover:underline hover:text-primary transition-all"
              href="/blogs"
            >
              Blog
            </Link>
            <Link
              className="text-primary hover:underline hover:text-accent transition-all"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        ) : null}
      </div>

      <div className="desk_nav py-5 hidden sm:flex w-full justify-evenly items-center">
        <div className="Logo font-grace text-xl">
          <Link
            className="hover:underline hover:text-primary transition-all"
            href="/"
          >
            <h1>GRACE</h1>
          </Link>
        </div>

        <div className="menu_list flex flex-row justify-center items-center gap-2">
          <Link
            className="hover:underline hover:text-primary transition-all"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:underline hover:text-primary transition-all"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:underline hover:text-primary transition-all"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="hover:underline hover:text-primary transition-all"
            href="/portfolio"
          >
            Portfio
          </Link>
          <Link
            className="hover:underline hover:text-primary transition-all"
            href="/blogs"
          >
            Blog
          </Link>
        </div>

        <div className="cta">
          <Link
            className="bg-primary rounded-md text-background hover:underline hover:text-accent transition-all"
            href="/contact"
          >
            <button className="px-4 py-2">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
