import Card from "../ui/Card";

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <Card>
          <h3 className="text-2xl font-bold">Project 1</h3>
          <p>Ecommerce</p>
        </Card>
        <Card>
          <h3 className="text-2xl font-bold">Project 2</h3>
          <p>SaaS</p>
        </Card>
        <Card>
          <h3 className="text-2xl font-bold">Project 3</h3>
          <p>Startup</p>
        </Card>
      </div>
    </section>
  );
}
