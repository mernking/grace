import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="px-3 py-2 w-full flex gap-2 flex-col justify-center items-center"
    >
      <div className="title text-2xl py-3 font-bold">
        <h1>Projects</h1>
      </div>
      <div className="portgrid w-full grid grid-cols-1 md:grid-cols-3 gap-2">
        <Link legacyBehavior href="https://chidavid.netlify.app/" passHref>
          <a
            href="https://chidavid.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="gridcard h-full border-[1px] overflow-hidden rounded-lg p-2 w-full flex flex-col justify-center items-center">
              <div className="image w-full filter grayscale">
                <Image
                  className="w-full rounded-lg"
                  alt={"Boundless Bolt website"}
                  width={300}
                  height={300}
                  src={"/portfolio/images/david.png"}
                />
              </div>
              <div className="nametitle font-extrabold">
                <p>Boundless Bolt Portfolio</p>
              </div>
              <div className="commment">
                <p>
                  this is the protfolio of Boundless Bolt, where he showcase the
                  works he has done
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link
          legacyBehavior
          href="https://job-agsmovers.onrender.com/"
          passHref
        >
          <a
            href="https://job-agsmovers.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="gridcard h-full border-[1px] overflow-hidden rounded-lg p-2 w-full flex flex-col justify-center items-center">
              <div className="image w-full filter grayscale">
                <Image
                  className="w-full rounded-lg"
                  alt={"atomic events website"}
                  width={300}
                  height={300}
                  src={"/portfolio/images/agsmovers.png"}
                />
              </div>
              <div className="nametitle font-extrabold">
                <p>Fullstack development</p>
              </div>
              <div className="commment">
                <p>
                  this is ags movers ob application website, where users can
                  submit their details then the website will send it to the
                  backend for processing the system will forward td the
                  information to ags movers employer telegram account and still
                  email the applicant on every form submition
                </p>
              </div>
            </div>
          </a>
        </Link>
        <Link
          legacyBehavior
          href="https://task-management-api-2ti2.onrender.com"
          passHref
        >
          <a
            href="https://task-management-api-2ti2.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="gridcard h-full border-[1px] overflow-hidden rounded-lg p-2 w-full flex flex-col justify-center items-center">
              <div className="image w-full filter grayscale">
                <Image
                  className="w-full rounded-lg"
                  alt={"Task management API"}
                  width={300}
                  height={300}
                  src={"/portfolio/images/taskmanager.png"}
                />
              </div>
              <div className="nametitle font-extrabold">
                <p>API development</p>
              </div>
              <div className="commment">
                <p>
                  this is a task management api i made, for public use. kindly
                  refer to the documentation
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <div className="w-full">
        <Link
          className="w-full block p-2 border rounded-md text-center bg-white/5 hover:bg-white hover:text-black/50"
          href="/projects"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}
