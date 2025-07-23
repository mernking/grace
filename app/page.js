import HomePage from "@/components/pages/Home";

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
  return <HomePage />;
}
