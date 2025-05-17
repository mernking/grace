
export const metadata = {
  title: "Boundless Bolt | Web & Automation Development Agency",
  description:
    "Boundless Bolt is a results-driven web development agency specializing in bot development, automation systems, SaaS, Web3 solutions, APIs, and SEO. We build scalable digital solutions that drive growth and deliver measurable ROI.",
  openGraph: {
    title: "Boundless Bolt | Web & Automation Development Agency",
    description:
      "Boundless Bolt is a results-driven web development agency specializing in bot development, automation systems, SaaS, Web3 solutions, APIs, and SEO. We build scalable digital solutions that drive growth and deliver measurable ROI.",
  },
};



const services = [
  {
    title: "Bot Development",
    description: "Custom bots to automate, engage, and grow.",
    icon: "🤖",
  },
  {
    title: "Web3 Bot Development",
    description: "Blockchain-savvy bots for the decentralized future.",
    icon: "🔗",
  },
  {
    title: "API Development",
    description: "Robust APIs powering dynamic connections.",
    icon: "🔌",
  },
  {
    title: "Backend Development",
    description: "Scalable, secure, and efficient server solutions.",
    icon: "🛠️",
  },
  {
    title: "Frontend Development",
    description: "Stunning, responsive user interfaces.",
    icon: "🎨",
  },
  {
    title: "Automation Systems",
    description: "End-to-end automation for ultimate efficiency.",
    icon: "⚡",
  },
  {
    title: "SaaS Development",
    description: "Launch and scale your software-as-a-service ideas.",
    icon: "☁️",
  },
  {
    title: "Web Development",
    description: "Full-cycle web design and development.",
    icon: "🌐",
  },
  {
    title: "Shopify Development",
    description: "Ecommerce customization & growth solutions.",
    icon: "🛒",
  },
  {
    title: "Website SEO Optimization",
    description: "Get found. Grow faster.",
    icon: "🚀",
  },
  {
    title: "Technical SEO",
    description: "Advanced tactics for superior rankings.",
    icon: "🔍",
  },
  {
    title: "Web Design",
    description: "Eye-catching aesthetics, seamless usability.",
    icon: "✨",
  },
];

export default function Home() {
  return (
    <div className="w-full max-w-6xl flex flex-col gap-16 mx-auto">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-14 text-center">
        {/* Lightning bolt SVG background (placeholder, user can customize) */}
        <div className="absolute inset-0 flex justify-center items-center -z-10 opacity-20 pointer-events-none">
          <svg
            width="480"
            height="320"
            viewBox="0 0 480 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-full"
          >
            <path
              d="M260 15L190 175H250L170 305L300 140H237L260 15Z"
              fill="#39aeb9"
              stroke="#00FFFF"
              strokeWidth="7"
            />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-[#39aeb9] to-cyan-400 drop-shadow-lg">
          Transforming Ideas into Cutting-Edge Technology
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-lg sm:text-xl text-[#c9d1d4]">
          Full-stack development, automation, and tailored solutions to take
          your business further
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block text-lg bg-[#39aeb9] hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-lg transition shadow-md"
        >
          Get Started
        </a>
      </section>

      {/* Services Section */}
      <section className="w-full flex flex-col items-center" id="services">
        <h2 className="text-3xl mb-4 font-bold tracking-tight text-white">
          Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#111418] border border-[#39aeb9] rounded-xl p-7 flex flex-col items-center text-center shadow-xl hover:shadow-cyan-400/30 transition"
            >
              <span className="mb-4 text-4xl">{service.icon}</span>
              <h2 className="font-bold text-xl text-[#39aeb9] mb-2">
                {service.title}
              </h2>
              <p className="text-[#c9d1d4] opacity-90 text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Placeholder for Social Proof / Testimonials Section */}
      <section className="w-full max-w-xl mx-auto text-center mt-24 mb-10 opacity-60">
        {/* You can add real testimonials/logos here later */}
        <div className="border border-dashed border-gray-700 rounded-lg py-12">
          <em>Social proof / testimonials coming soon...</em>
        </div>
      </section>
    </div>
  );
}
