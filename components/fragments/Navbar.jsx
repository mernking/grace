"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full p-3 text-sm">
      <div className="desktop_mobile rounded-md w-full hidden md:flex flex-row justify-between items-center gap-5">
        <div className="w-full flex bg-accent/60 p-1 flex-row justify-between items-center rounded-md">
          <Link
            className="hover:text-primary transition cursor-pointer"
            href={"/"}
          >
            <Image
              className="rounded-full"
              alt="[ boundless bolt ]"
              src="/logo.png"
              height={30}
              width={30}
            />
          </Link>
          <div className="nav_menu flex flex-row gap-5">
            <Link
              className="hover:text-primary transition cursor-pointer"
              href={"/"}
            >
              Home
            </Link>
            <Link
              className="hover:text-primary transition cursor-pointer"
              href={"/service"}
            >
              service
            </Link>
            <Link
              className="hover:text-primary transition cursor-pointer"
              href={"/projects"}
            >
              Projects
            </Link>
            {/* <Link
              className="hover:text-primary transition cursor-pointer"
              href={"/blog"}
            >
              Blog
            </Link> */}
          </div>
        </div>
        <Link
          className="hover:text-primary transition cursor-pointer"
          href={"/contact"}
        >
          <button className="border rounded-md px-4 py-2 cursor-pointer">
            contact
          </button>
        </Link>
      </div>
      <div className="moile_menu md:hidden">
        <div className="mobile_head bg-accent p-1 flex flex-row justify-between">
          <Link
            className="hover:text-primary transition cursor-pointer"
            href={"/"}
          >
            <Image
              className="rounded-full"
              alt="[ boundless bolt ]"
              src="/logo.png"
              height={30}
              width={30}
            />
          </Link>
          <button onClick={toggleMenu}>menu</button>
        </div>
        {isOpen && (
          <div className="w-full p-1 bg-accent flex flex-col gap-4 rounded-b-md">
            <div className="nav_menu flex flex-col gap-4">
              <Link
                className="hover:text-primary transition w-full text-center bg-background rounded-md cursor-pointer"
                href={"/service"}
              >
                service
              </Link>
              <Link
                className="hover:text-primary transition w-full text-center bg-background rounded-md cursor-pointer"
                href={"/projects"}
              >
                Projects
              </Link>
              <Link
                className="hover:text-primary transition w-full text-center bg-background rounded-md cursor-pointer"
                href={"/blog"}
              >
                Blog
              </Link>
            </div>
            <Link
              className="hover:text-primary w-full border text-center rounded-md transition cursor-pointer"
              href={"/contact"}
            >
              <button>contact</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
