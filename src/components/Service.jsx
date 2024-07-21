import React from "react";
import { BsVectorPen } from "react-icons/bs";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GrOptimize } from "react-icons/gr";
import { FiBriefcase } from "react-icons/fi";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { MdOutlineLocationSearching } from "react-icons/md";

export default function Service() {
  return (
    <div>
      <div className="title text-center font-grace">
        <h1>SERVICES</h1>
      </div>

      <div className="services grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
        <div className="service flex flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <BsVectorPen />
          </div>
          <h3>WEBSITE DESIGN</h3>
          <p>
            We design websites that make your brand stand out, emphasizing
            aesthetic appeal and user experience to enhance ROI.
          </p>
        </div>
        <div className="service flex flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <IoCodeSlashOutline />
          </div>
          <h3>WEBSITE DEVELOPMENT</h3>
          <p>
            We develop web apps and SEO-optimized websites to elevate your brand
            above competitors, ensuring superior online visibility and business
            growth.
          </p>
        </div>
        <div className="service flex flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <GrOptimize />
          </div>
          <h3>CRO (Conversion Rate Optimization)</h3>
          <p>
            We optimize websites to improve conversion rates, maximizing ROI and
            ensuring optimal user engagement and satisfaction.
          </p>
        </div>
        <div className="service flex flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <HiOutlineStatusOnline />
          </div>
          <h3>SMM (Social Media Marketing)</h3>
          <p>
            We leverage social media platforms to enhance your brand&apos;s
            online presence, engage with your audience, and drive business
            growth through targeted social media strategies.
          </p>
        </div>

        <div className="service flex flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <FiBriefcase />
          </div>
          <h3>BUSINESS DEVELOPMENT</h3>
          <p>
            We develop strategic plans to expand your business, leveraging
            digital solutions to achieve sustainable growth and competitive
            advantage.
          </p>
        </div>
        <div className="service flex flex-col justify-center items-center w-[300px]">
          <div className="icon rounded-full px-2 py-2 text-3xl">
            <MdOutlineLocationSearching />
          </div>
          <h3>SEM (Search Engine Marketing)</h3>
          <p>
            We execute targeted digital marketing campaigns to drive qualified
            traffic and maximize your ROI through paid search strategies.
          </p>
        </div>
      </div>
    </div>
  );
}
