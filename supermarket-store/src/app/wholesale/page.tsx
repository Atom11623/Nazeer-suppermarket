"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const perks = [
  { icon: "💰", title: "Wholesale Pricing", description: "Discounted rates once you meet minimum order quantities." },
  { icon: "📦", title: "Bulk Availability", description: "Stock ready for shops, restaurants, offices and events." },
  { icon: "🤝", title: "Dedicated Support", description: "A direct line to our team for repeat and recurring orders." },
  { icon: "🚚", title: "Reliable Supply", description: "Consistent stock levels so your business never runs short." },
];

export default function WholesalePage() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    products: "",
    quantity: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const whatsappNumber = "2340000000000"; // TODO: replace with the real business WhatsApp number

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const message = encodeURIComponent(
    `Wholesale Inquiry\n\nName: ${form.name}\nBusiness: ${form.business}\nPhone: ${form.phone}\nProducts needed: ${form.products}\nEstimated quantity: ${form.quantity}`
  );

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <p className="font-semibold text-green-400">RETAIL & WHOLESALE</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Wholesale Orders
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            Nasser Enterprise provides competitive wholesale prices for
            shops, restaurants, offices, businesses, events and bulk buyers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <div key={perk.title} className="rounded-2xl border bg-white p-6 text-center shadow-sm">
              <span className="text-4xl">{perk.icon}</span>
              <h3 className="mt-4 font-bold">{perk.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">{perk.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
          <h2 className="text-center text-3xl font-bold">Request a Wholesale Quote</h2>
          <p className="mt-3 text-center text-gray-500">
            Tell us what you need and we'll get back to you with pricing and
            availability.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
              <p className="text-4xl">✅</p>
              <h3 className="mt-3 text-xl font-bold text-green-800">
                Almost done!
              </h3>
              <p className="mt-2 text-green-700">
                Click below to send your inquiry to our team on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
              >
                Send via WhatsApp
              </a>
              <div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-gray-500 hover:text-gray-700"
                >
                  Edit inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-5 rounded-2xl border bg-white p-8 shadow-sm">
              <div>
                <label className="block text-sm font-semibold">Full Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Business Name</label>
                <input
                  required
                  type="text"
                  value={form.business}
                  onChange={(e) => handleChange("business", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Phone Number</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Products Needed</label>
                <textarea
                  required
                  rows={3}
                  value={form.products}
                  onChange={(e) => handleChange("products", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Estimated Quantity</label>
                <input
                  required
                  type="text"
                  value={form.quantity}
                  onChange={(e) => handleChange("quantity", e.target.value)}
                  placeholder="e.g. 50 cartons per month"
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-green-600 px-6 py-4 font-bold text-white transition hover:bg-green-700"
              >
                Continue
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
        <p className="text-gray-500">
          Prefer to browse first?{" "}
          <Link href="/products" className="font-semibold text-green-600 hover:underline">
            View our full product catalog →
          </Link>
        </p>
      </section>

      <Footer />
    </main>
  );
}
