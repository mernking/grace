import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Service from "@/components/Service";
import TechStack from "@/components/Whyme";

export default function Home() {
  return (
    <div className="w-full max-w-[1200px] flex flex-col gap-10 justify-center items-center">
      {/* <Navbar /> */}
      <Hero />
      <Portfolio />
      <TechStack />
      <Service />
      <Footer />
    </div>
  );
}
