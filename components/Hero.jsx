import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaRegCircleUp } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-[80vh] px-3 w-full flex sm:flex-row gap-2 flex-col-reverse justify-center items-center"
    >
      <div className="nav w-full absolute left-0 top-0">
        <Navbar />
      </div>
      <div className="fixed right-2 border-[1px] p-1 rounded-lg bg-black font-bold bottom-5 text-2xl">
        <Link href="#">
          <p>
            <FaRegCircleUp />
          </p>
        </Link>
      </div>
      <div className="name sm:h-full px-[4px] w-full flex flex-col justify-center items-center">
        <div className="named h-fit text-5xl py-2 font-bold sm:text-[70px]">
          <h1 className="flex flex-col gap-2">Boundless Bolt</h1>
        </div>
        <div className="namedetail text-center text-[18px]">
          <p>Full-Stack Web Developer</p>
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
        <div className="w-full max-w-3xl flex flex-col md:flex-row gap-2 mt-4 justify-center items-center">
          <Link
            className="w-full block p-2 border rounded-md text-center bg-white/5 hover:bg-white hover:text-black/50"
            href="/projects"
          >
            View Projects
          </Link>
          <Link
            className="w-full block p-2 border rounded-md text-center bg-white/5 hover:bg-white hover:text-black/50"
            href="https://github.com/mernking?tab=repositories"
          >
            Open Source Projects
          </Link>
        </div>
      </div>
      {/* <div className="image flex justify-center items-center w-full sm:w-1/2">
        <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] border-[5px] rounded-full overflow-hidden justify-center items-center">
          <Image
            className="w-[400px]"
            alt="profile picture"
            src={"/image/image.jpg"}
            width={400}
            height={300}
          />
        </div>
      </div> */}
    </section>
  );
}
