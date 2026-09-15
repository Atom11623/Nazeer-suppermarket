import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: "✓",
    title: "Quality First",
    description:
      "Every product we stock is chosen for reliability and value, whether it's a single item or a full truckload.",
  },
  {
    icon: "🤝",
    title: "Trusted Partnerships",
    description:
      "We work closely with shops, restaurants, offices and event planners across Kogi State and beyond.",
  },
  {
    icon: "💰",
    title: "Fair Pricing",
    description:
      "Competitive retail prices and genuine wholesale discounts for bulk buyers, with no hidden costs.",
  },
  {
    icon: "🚚",
    title: "Dependable Supply",
    description:
      "We keep our shelves stocked so you can count on us for repeat orders, big or small.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="bg-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <p className="font-semibold text-green-200">ABOUT US</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Nasser Enterprise NIG. LTD
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-green-50">
            A trusted retail and wholesale supplier of groceries, beverages,
            household essentials and everyday products, based in Obajana,
            Lokoja, Kogi State.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <h2 className="text-3xl font-bold">Our Story</h2>
        <p className="mt-4 leading-8 text-gray-600">
          Nasser Enterprise NIG. LTD was built to make everyday shopping
          simple and reliable for families and businesses around Obajana and
          Lokoja. From staple groceries to household essentials, we stock
          the products our community relies on and price them fairly for
          both individual customers and bulk buyers.
        </p>
        <p className="mt-4 leading-8 text-gray-600">
          Today, we proudly serve homes, shops, restaurants, offices and
          event organizers with dependable retail and wholesale supply, and
          we're always working to expand our range and improve how easy it
          is to order from us.
        </p>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="text-center text-3xl font-bold">What We Stand For</h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border bg-white p-6 text-center shadow-sm"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="mt-4 font-bold">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
        <p className="text-3xl">📍</p>
        <h2 className="mt-3 text-2xl font-bold">Visit Us</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-600">
          No. 001 Hausa Quarters, Obajana, Lokoja, Kogi State, Nigeria.
        </p>
      </section>

      <Footer />
    </main>
  );
}
