import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background py-4 mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="space-x-4 mb-4">
          <Link href="/service">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} BoundlessBolt. All rights reserved.</p>
      </div>
    </footer>
  );
}
