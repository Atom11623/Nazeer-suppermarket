import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = [
  {
    name: "Groceries",
    icon: "🛒",
    description: "Rice, pasta, noodles, oil and more",
  },
  {
    name: "Biscuits & Snacks",
    icon: "🍪",
    description: "Biscuits and everyday snacks",
  },
  {
    name: "Household",
    icon: "🧼",
    description: "Omo, detergents and home essentials",
  },
  {
    name: "Drinks & Beverages",
    icon: "🥤",
    description: "Drinks, water, malt and juices",
  },
  {
    name: "Personal Care",
    icon: "🧴",
    description: "Personal hygiene products",
  },
  {
    name: "Kitchen",
    icon: "🍳",
    description: "Kitchen and cooking essentials",
  },
];

const benefits = [
  {
    icon: "🚚",
    title: "Convenient Shopping",
    description: "Shop from anywhere",
  },
  {
    icon: "✓",
    title: "Quality Products",
    description: "Products for homes and businesses",
  },
  {
    icon: "💰",
    title: "Competitive Prices",
    description: "Great retail and wholesale prices",
  },
  {
    icon: "📦",
    title: "Bulk Orders",
    description: "Wholesale options available",
  },
];

export default function Home() {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="bg-green-700 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium">
              Nasser Enterprise NIG. LTD
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Quality Products,
              <span className="block text-green-200">
                Great Prices.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-green-50">
              Your trusted source for groceries, beverages,
              household essentials and everyday products in
              Obajana, Lokoja, Kogi State.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="rounded-xl bg-white px-7 py-4 text-center font-bold text-green-700 hover:bg-gray-100"
              >
                Shop Products →
              </Link>

              <Link
                href="/wholesale"
                className="rounded-xl border border-white/40 px-7 py-4 text-center font-bold hover:bg-white/10"
              >
                Wholesale Orders
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex h-72 w-72 items-center justify-center rounded-full bg-white/10 text-8xl shadow-2xl sm:h-96 sm:w-96">
              🛒
            </div>
          </div>
        </div>
      </section>

      <section className="border-b bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex gap-4"
            >
              <span className="text-3xl">
                {benefit.icon}
              </span>

              <div>
                <h3 className="font-bold">
                  {benefit.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div>
          <p className="font-semibold text-green-600">
            SHOP NASSER ENTERPRISE
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Shop by Category
          </h2>

          <p className="mt-3 text-gray-500">
            Find groceries, drinks, household products and
            everyday essentials.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              href={`/categories/${category.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`}
              key={category.name}
              className="group rounded-2xl border bg-white p-6 text-center shadow-sm hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
            >
              <div className="text-5xl group-hover:scale-110">
                {category.icon}
              </div>

              <h3 className="mt-4 font-bold">
                {category.name}
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <p className="font-semibold text-green-600">
            POPULAR PRODUCTS
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Featured Products
          </h2>

          <p className="mt-3 text-gray-500">
            Popular products available from Nasser Enterprise.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="inline-block rounded-xl bg-green-600 px-7 py-4 font-bold text-white hover:bg-green-700"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
        <div className="rounded-3xl bg-gray-950 px-6 py-14 text-white sm:px-12 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="font-semibold text-green-400">
                RETAIL & WHOLESALE
              </span>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Buying in Bulk?
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-400">
                Nasser Enterprise provides competitive wholesale
                prices for shops, restaurants, offices, businesses,
                events and bulk buyers.
              </p>

              <Link
                href="/wholesale"
                className="mt-8 inline-block rounded-xl bg-green-600 px-7 py-4 font-bold hover:bg-green-500"
              >
                Explore Wholesale →
              </Link>
            </div>

            <div className="text-center text-8xl">
              📦
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center lg:px-8">
          <p className="text-3xl">📍</p>

          <h2 className="mt-3 text-2xl font-bold">
            Visit Nasser Enterprise
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            No. 001 Hausa Quarters, Obajana,
            Lokoja, Kogi State, Nigeria.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
