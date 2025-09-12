import Card from "../ui/Card";

export default function Testimonials() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <Card>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          <p className="font-bold mt-4">- Client 1</p>
        </Card>
        <Card>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          <p className="font-bold mt-4">- Client 2</p>
        </Card>
        <Card>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
          <p className="font-bold mt-4">- Client 3</p>
        </Card>
      </div>
    </section>
  );
}
