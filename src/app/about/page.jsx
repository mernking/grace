import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";

export const metadata = {
  title: "About Boundless Bolt",
  description:
    "At Boundless Bolt, we are a digital agency committed to excellence. We specialize in crafting high-impact digital marketing strategies, developing cutting-edge websites, and creating compelling designs. Our team of experts is dedicated to delivering results that drive growth and elevate your brand. Partner with us to experience the difference that quality and innovation can make for your business.",
  openGraph: {
    title: "About Boundless Bolt",
    description:
      "At Boundless Bolt, we are a digital agency committed to excellence. We specialize in crafting high-impact digital marketing strategies, developing cutting-edge websites, and creating compelling designs. Our team of experts is dedicated to delivering results that drive growth and elevate your brand. Partner with us to experience the difference that quality and innovation can make for your business.",
  },
};

export default function page() {
  return (
    <div className="flex flex-col gap-2">
      <div className="title">
        <h1 className="font-grace text-center">About us</h1>
      </div>
      <div className="overflow-hidden rounded-lg">
        <Image
          className=""
          src="/portfolio/test.jpg"
          alt="image"
          width="200"
          height="300"
          layout="responsive"
        />
      </div>
      <div className="aboutsection py-2">
        <p>
          Welcome to Boundless Bolt Digital Agency! We’re led by Chi Davi, a
          passionate freelancer turned agency founder, dedicated to providing
          top-notch digital solutions. After seeing too many clients frustrated
          by unreliable freelancers, Chi established Boundless Bolt to offer
          dependable, high-quality service that truly delivers. We’re here to
          make your brand shine with our expertise in website design and
          development, conversion rate optimization (CRO), social media
          marketing (SMM), search engine marketing (SEM), and much more. Our
          friendly team is committed to understanding your needs and turning
          your digital goals into reality. Join us at Boundless Bolt and let’s
          work together to make your online presence outstanding!
        </p>
      </div>
    </div>
  );
}
