import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  return (
    <section className="px-3 py-2 w-full flex gap-2 flex-col justify-center items-center">
      <div className="title text-2xl py-3 font-bold">
        <h1>Footer</h1>
      </div>

      <div className="footgrid w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="gridcard border-[1px] rounded-lg p-2 w-full flex flex-col justify-center items-center">
          <div className="image flex justify-center items-center w-full">
            <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] border-[5px] border-gray-300 rounded-full overflow-hidden justify-center items-center">
              <Image
                className="w-[400px]"
                alt="profile picture"
                src={"/image/image.jpg"}
                width={400}
                height={300}
              />
            </div>
          </div>
          <div className="name sm:h-full px-[4px] w-full sm:w-1/2 flex flex-col text-center justify-center items-center">
            <div className="named w-full h-fit text-5xl py-2 font-bold sm:text-[50px]">
              <h1 className="flex flex-col gap-2">Boundless Bolt</h1>
            </div>
            <div className="namedetail w-full text-center text-[18px]">
              <p>Full stack developer, problem solver and designer</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 text-2xl font-bold">
              <Link legacyBehavior href="https://x.com/davidchidev" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <p>
                    <FaXTwitter />
                  </p>
                </a>
              </Link>
              <Link legacyBehavior href="https://github.com/mernking" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <p>
                    <FaGithub />
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="gridcard border-[1px] rounded-lg p-2 w-full flex flex-col justify-center items-center">
          <div className="w-full h-fit flex flex-col items-center justify-between gap-3">
            <Link href="/#">Home</Link>
            <Link href="/#portfolio">Projects</Link>
            <Link href="/#">About</Link>
            <Link href="/#service">Service</Link>
            <Link href="/#why">Home</Link>
          </div>
        </div>
      </div>
      <div className="TMstuff py-3">
        <p>Boundless Bolt 2024</p>
      </div>
    </section>
  );
}
