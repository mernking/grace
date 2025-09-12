import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-background py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">BoundlessBolt</Link>
        <div className="space-x-4">
          <Link href="/service">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
