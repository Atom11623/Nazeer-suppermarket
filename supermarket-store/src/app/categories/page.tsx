import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, categoryList } from "@/data/products";

const categoryMeta: Record<string, { icon: string; description: string }> = {
  Groceries: { icon: "🛒", description: "Rice, pasta, noodles, oil and more" },
  "Biscuits & Snacks": { icon: "🍪", description: "Biscuits and everyday snacks" },
  Household: { icon: "🧼", description: "Detergents and home essentials" },
  "Drinks & Beverages": { icon: "🥤", description: "Drinks, water, malt and juices" },
  "Personal Care": { icon: "🧴", description: "Personal hygiene products" },
  Kitchen: { icon: "🍳", description: "Kitchen and cooking essentials" },
};

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="bg-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <p className="font-semibold text-green-200">NASSER ENTERPRISE</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">Shop by Category</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-green-50">
            Find groceries, drinks, household products and everyday essentials, organized for easy browsing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categoryList.map((category) => {
            const meta = categoryMeta[category] ?? { icon: "🏷️", description: "" };
            const count = products.filter((p) => p.category === category).length;

            return (
              <Link
                href={`/categories/${slugify(category)}`}
                key={category}
                className="group rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg"
              >
                <div className="text-5xl transition group-hover:scale-110">{meta.icon}</div>
                <h3 className="mt-4 font-bold">{category}</h3>
                <p className="mt-2 text-xs leading-5 text-gray-500">{meta.description}</p>
                <p className="mt-3 text-xs font-semibold text-green-600">{count} products</p>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
