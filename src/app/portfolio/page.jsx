import Portfoliopg from "@/components/pages/Portfoliopg";
import React from "react";
import "@/components/css/portfolio.css";

export const metadata = {
  title: "Boundless Bolt portfolio",
  description:
    "Welcome to the Boundless Bolt portfolio page, where we showcase our work and highlight the diverse projects we’ve completed. As a digital agency, we take pride in delivering high-quality solutions that drive results. Explore our portfolio to see examples of our digital marketing campaigns, web development projects, and creative design work. Discover how we’ve helped our clients succeed and learn more about our approach to achieving outstanding results.",
  openGraph: {
    title: "Boundless Bolt portfolio",
    description:
      "Welcome to the Boundless Bolt portfolio page, where we showcase our work and highlight the diverse projects we’ve completed. As a digital agency, we take pride in delivering high-quality solutions that drive results. Explore our portfolio to see examples of our digital marketing campaigns, web development projects, and creative design work. Discover how we’ve helped our clients succeed and learn more about our approach to achieving outstanding results.",
  },
};
export default function page() {
  return (
    <div className="portfoliopg">
      <div className="title text-center pb-3">
        <h1 className="font-grace">Portfolio</h1>
      </div>
      <div className="portsection px-2 w-full flex flex-wrap justify-center items-center">
        <Portfoliopg />
      </div>
    </div>
  );
}
