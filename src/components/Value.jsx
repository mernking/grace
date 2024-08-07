import React from "react";
import { MdOutlineShield } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { BsPersonCheck } from "react-icons/bs";

export default function Value() {
  return (
    <div className="w-full text-center flex flex-col justify-center items-center">
      <div className="title font-grace">
        <h1>OUR VALUES</h1>
      </div>
      <div className="simpletxt text-center">
        <p>Our values are at the heart of everything we do.</p>
      </div>
      <div className="values grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div className="value flex shadow-[inset_0px_5px_4px_0px_#1ee1eb] rounded-md px-1 flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <MdOutlineShield />
          </div>
          <h3>INTEGRITY</h3>
          <p>
            We uphold the highest ethical standards in all our actions.
            Transparency and honesty are fundamental to everything we do.
          </p>
        </div>
        <div className="value flex shadow-[inset_0px_5px_4px_0px_#1ee1eb] rounded-md px-1 flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <IoTrophyOutline />
          </div>
          <h3>EXCELLENCE</h3>
          <p>
            We strive for excellence in all aspects of our work, aiming to
            deliver exceptional results and continuously improve.
          </p>
        </div>
        <div className="value flex shadow-[inset_0px_5px_4px_0px_#1ee1eb] rounded-md px-1 flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <FaRegHandshake />
          </div>
          <h3>CLIENT FOCUS</h3>
          <p>
            Our clients are at the heart of our agency. We are dedicated to
            understanding their needs and exceeding their expectations.
          </p>
        </div>
        <div className="value flex shadow-[inset_0px_5px_4px_0px_#1ee1eb] rounded-md px-1 flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <RiLightbulbFlashLine />
          </div>
          <h3>INNOVATION</h3>
          <p>
            We embrace creativity and innovation, constantly seeking new ideas
            and solutions to drive positive change.
          </p>
        </div>
        <div className="value flex shadow-[inset_0px_5px_4px_0px_#1ee1eb] rounded-md px-1 flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <BsPeople />
          </div>
          <h3>COLLABORATION</h3>
          <p>
            We believe in the power of teamwork and collaboration. By working
            together, we achieve more and foster a supportive environment.
          </p>
        </div>
        <div className="value flex shadow-[inset_0px_5px_4px_0px_#1ee1eb] rounded-md px-1 flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <BsPersonCheck />
          </div>
          <h3>ACCOUNTABILITY</h3>
          <p>
            We take responsibility for our actions and outcomes, holding
            ourselves and each other accountable to deliver on our commitments.
          </p>
        </div>
      </div>
    </div>
  );
}
