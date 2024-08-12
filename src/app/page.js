import Hero from "../components/Hero";
import About from "@/components/About";
import Value from "@/components/Value";
import Service from "@/components/Service";
import Portprev from "@/components/Portprev";


export const metadata = {
  title: "Boundless Bolt",
  description: "A digital agency with a difference, by producing quality projects that promise and delivers high returns",
  openGraph: {
    title: "Boundless Bolt",
    description: "A digital agency with a difference, by producing quality projects that promise and delivers high returns",
  },
};

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
