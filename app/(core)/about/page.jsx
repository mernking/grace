export const metadata = {
  title: "About Boundless Bolt | Our Mission & Team",
  description: "Learn about Boundless Bolt’s mission to deliver innovative, high-quality solutions. Meet the team dedicated to pushing boundaries and transforming bold ideas into boundless possibilities.",
  openGraph: {
    title: "About Boundless Bolt | Our Mission & Team",
    description: "Learn about Boundless Bolt’s mission to deliver innovative, high-quality solutions. Meet the team dedicated to pushing boundaries and transforming bold ideas into boundless possibilities.",
  },
};

export default function AboutPage() {
  return (
    <section className="bg-background text-text py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          About Boundless Bolt
        </h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          At <span className="text-primary font-semibold">Boundless Bolt</span>,
          we believe in pushing beyond limits—delivering innovative solutions
          that empower businesses and individuals to move faster, smarter, and
          stronger.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Who We Are</h2>
            <p>
              Boundless Bolt is more than just a company—we are a team of
              forward-thinkers, creators, and problem-solvers dedicated to
              driving progress. Our mission is to unlock opportunities without
              boundaries, ensuring that our clients thrive in a constantly
              evolving world.
            </p>

            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p>
              We aim to deliver high-quality, reliable, and innovative solutions
              that give businesses the agility they need to succeed. With a
              focus on excellence and creativity, Boundless Bolt is here to
              transform bold ideas into boundless possibilities.
            </p>

            <h2 className="text-2xl font-semibold">Why Choose Us</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Innovative solutions tailored to your needs</li>
              <li>A passionate team committed to excellence</li>
              <li>Trusted by clients across industries</li>
              <li>Driven by creativity, powered by technology</li>
            </ul>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src="/images/about-team.jpg"
              alt="Boundless Bolt Team"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
