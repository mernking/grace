import Contact from '@/components/pages/Contact';
import React from 'react'

export const metadata = {
  title: "Boundless Bolt contact page",
  description:
    "We are a digital agency that stands out by delivering quality projects that promise and deliver high returns. Get in touch with us today to discuss how we can help your business grow.",
  openGraph: {
    title: "Boundless Bolt contact page",
    description:
      "We are a digital agency that stands out by delivering quality projects that promise and deliver high returns. Get in touch with us today to discuss how we can help your business grow.",
  },
};

export default function page() {
  return (
    <div className="contact">
        <Contact />
    </div>
  );
}
