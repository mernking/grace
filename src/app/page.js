import Hero from "../components/Hero";
import About from "@/components/About";
import Value from "@/components/Value";
import Service from "@/components/Service";
import Portprev from "@/components/Portprev";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 justify-center items-center">
      <Hero />
      <About />
      <Service />
      <Value />
      <Portprev />
    </main>
  );
}
