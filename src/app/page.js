import Hero from "../components/Hero";
import About from "@/components/About";
import Value from "@/components/Value";
import Service from "@/components/Service";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 justify-center items-center">
      <Hero />
      <About />
      <Service />
      <Value />
      <Footer />
    </main>
  );
}
