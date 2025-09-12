import { FaGlobe, FaRobot, FaServer } from "react-icons/fa";

const services = [
  { name: "Web Development", icon: <FaGlobe /> },
  { name: "Bot Development", icon: <FaRobot /> },
  { name: "Web3 Bots", icon: <FaRobot /> },
  { name: "API Development", icon: <FaServer /> },
  { name: "Backend", icon: <FaServer /> },
  { name: "Frontend", icon: <FaGlobe /> },
  { name: "Automation", icon: <FaRobot /> },
  { name: "SaaS", icon: <FaGlobe /> },
  { name: "Shopify", icon: <FaGlobe /> },
  { name: "SEO", icon: <FaGlobe /> },
  { name: "Technical SEO", icon: <FaServer /> },
  { name: "Web Design", icon: <FaGlobe /> },
];

export default function Services() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {services.map((service) => (
          <div key={service.name} className="text-center">
            <div className="text-5xl mx-auto text-accent">{service.icon}</div>
            <h3 className="text-2xl font-bold mt-4">{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
