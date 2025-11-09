import React from "react";
import { GoDatabase } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { GoRocket } from "react-icons/go";
import { FaUsersViewfinder } from "react-icons/fa6";
import { SiChainlink } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";

export default function Service() {
  return (
    <section
      id="service"
      className="px-3 py-2 w-full flex gap-2 flex-col justify-center items-center"
    >
      <div className="title text-2xl py-3 font-bold">
        <h1>Service</h1>
      </div>
      <div className="servicegrid w-full grid grid-cols-1 sm:grid-cols-3 gap-2">
        <div className="gridcard border-[1px] rounded-lg p-2 w-full flex flex-col justify-center items-center">
          <div className="image h-[70px] w-[70px] flex justify-center items-center text-4xl rounded-full">
            <GoDatabase />
          </div>
          <div className="nametitle font-extrabold text-xl">
            <p>Backend development</p>
          </div>
          <div className="commment">
            <p>
              Reliable backend development services that power your applications
              with smooth performance, strong security, and easy scalability
            </p>
          </div>
        </div>
        <div className="gridcard border-[1px] rounded-lg p-2 w-full flex flex-col justify-center items-center">
          <div className="image h-[70px] w-[70px] flex justify-center items-center text-4xl rounded-full">
            <CgWebsite />
          </div>
          <div className="nametitle font-extrabold text-xl">
            <p>Frontend development</p>
          </div>
          <div className="commment">
            <p>
              creating visually stunning, user-friendly interfaces, ensuring a
              seamless and engaging experience across all devices.
            </p>
          </div>
        </div>
        <div className="gridcard border-[1px] rounded-lg p-2 w-full flex flex-col justify-center items-center">
          <div className="image h-[70px] w-[70px] flex justify-center items-center text-4xl rounded-full">
            <GoRocket />
          </div>
          <div className="nametitle font-extrabold text-xl">
            <p>Website optimization</p>
          </div>
          <div className="commment">
            <p>
              Boost your site&apos;s speed, improve performance, and enhance
              user experience, ensuring faster load times and higher search
              rankings.
            </p>
          </div>
        </div>
        <div className="gridcard border-[1px] rounded-lg p-2 w-full flex flex-col justify-center items-center">
          <div className="image h-[70px] w-[70px] flex justify-center items-center text-4xl rounded-full">
            <FaUsersViewfinder />
          </div>
          <div className="nametitle font-extrabold text-xl">
            <p>Conversion optimization</p>
          </div>
          <div className="commment">
            <p>
              increase your site&apos;s effectiveness, turning more visitors
              into customers through strategic design, testing, and data-driven
              improvements.
            </p>
          </div>
        </div>
        <div className="gridcard border-[1px] rounded-lg p-2 w-full flex flex-col justify-center items-center">
          <div className="image h-[70px] w-[70px] flex justify-center items-center text-4xl rounded-full">
            <SiChainlink />
          </div>
          <div className="nametitle font-extrabold text-xl">
            <p>Blockchain development</p>
          </div>
          <div className="commment">
            <p>
              build secure, decentralized applications, leveraging blockchain
              technology for transparent, scalable, and innovative solutions.
            </p>
          </div>
        </div>
        <div className="gridcard border-[1px] rounded-lg p-2 w-full flex flex-col justify-center items-center">
          <div className="image h-[70px] w-[70px] flex justify-center items-center text-4xl rounded-full">
            <TbDeviceMobileCode />
          </div>
          <div className="nametitle font-extrabold text-xl">
            <p>Multiplatform App development</p>
          </div>
          <div className="commment">
            <p>
              create seamless, high-quality applications that work across
              various devices and operating systems, ensuring a consistent user
              experience everywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
