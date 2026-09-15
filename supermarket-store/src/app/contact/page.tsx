"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const businessEmail = "orders@nasserenterprise.example"; // TODO: replace with the real business email

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const mailtoLink = `mailto:${businessEmail}?subject=${encodeURIComponent(
    `Message from ${form.name || "website visitor"}`
  )}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)}`;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="bg-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <p className="font-semibold text-green-200">GET IN TOUCH</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-green-50">
            Questions about products, pricing or an order? We'd love to hear
            from you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Reach Us Directly</h2>

            <div className="mt-6 space-y-5 text-gray-600">
              <p>📍 No. 001 Hausa Quarters, Obajana, Lokoja, Kogi State, Nigeria</p>
              <p>📞 Contact us for orders</p>
              <p>💬 WhatsApp available</p>
              <p>🕒 Monday – Saturday, 8:00am – 7:00pm</p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
                <p className="text-4xl">✅</p>
                <h3 className="mt-3 text-xl font-bold text-green-800">
                  Ready to send!
                </h3>
                <p className="mt-2 text-green-700">
                  Click below to open your email app with your message ready
                  to go.
                </p>
                <a
                  href={mailtoLink}
                  className="mt-5 inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
                >
                  Send Email
                </a>
                <div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-semibold text-gray-500 hover:text-gray-700"
                  >
                    Edit message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border bg-white p-8 shadow-sm">
                <div>
                  <label className="block text-sm font-semibold">Name</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
