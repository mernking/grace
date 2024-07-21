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
    <div className="w-full">
      <div className="mobile_nav w-full sm:hidden">
        <div className="w-full flex flex-row justify-between items-center py-2 px-3">
          <div className="Logo">
            <h1 className="font-grace text-xl">GRACE</h1>
          </div>
          <div className="bugger_menu font-bold">
            <button onClick={handleClick}>
              <RiMenu3Fill />
            </button>
          </div>
        </div>
        {open ? (
          <div className="menu_list absolute top-9 text-center w-full flex flex-col gap-2 px-5 py-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfio</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        ) : null}
      </div>

      <div className="desk_nav py-5 hidden sm:flex w-full justify-evenly items-center">
        <div className="Logo font-grace text-xl">
          <h1>GRACE</h1>
        </div>

        <div className="menu_list flex flex-row justify-center items-center gap-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfio</Link>
          <Link href="/blog">Blog</Link>
        </div>

        <div className="cta">
          <Link href="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
