import Bloger from '@/components/pages/Bloger'
import React from 'react'

export const metadata = {
  title: "Boundless Bolt Blogs",
  description:
    "Dive into our blog to explore the latest trends, tips, and insights from the world of digital marketing, web development, and design. At our digital agency, we believe in sharing knowledge that drives results. From in-depth articles to quick tips, our blog is your go-to resource for staying ahead in the digital landscape.",
  openGraph: {
    title: "Boundless Bolt Blogs",
    description:
      "Dive into our blog to explore the latest trends, tips, and insights from the world of digital marketing, web development, and design. At our digital agency, we believe in sharing knowledge that drives results. From in-depth articles to quick tips, our blog is your go-to resource for staying ahead in the digital landscape.",
  },
};

export default function page() {
  return (
    <div>
      <Bloger />
    </div>
  )
}
