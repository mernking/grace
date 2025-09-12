import Card from "../ui/Card";
import Button from "../ui/Button";

export default function Pricing() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <Card>
          <h3 className="text-2xl font-bold">Website</h3>
          <p className="text-4xl font-bold">From $995</p>
          <Button>Get Started</Button>
        </Card>
        <Card>
          <h3 className="text-2xl font-bold">Advanced</h3>
          <p className="text-4xl font-bold">From $2,495</p>
          <Button>Get Started</Button>
        </Card>
        <Card>
          <h3 className="text-2xl font-bold">Custom</h3>
          <p className="text-4xl font-bold">Get a Quote</p>
          <Button>Contact Us</Button>
        </Card>
      </div>
    </section>
  );
}
