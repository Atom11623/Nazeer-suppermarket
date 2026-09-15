"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categoryList } from "@/data/products";

const categories = ["All", ...categoryList];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    const term = search.toLowerCase().trim();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;

      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="bg-green-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <p className="font-semibold text-green-200">NASSER ENTERPRISE</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-green-50">
            Browse quality groceries, household essentials, beverages,
            personal care products and more — at retail and wholesale
            prices.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Shop All Products</h2>
            <p className="mt-1 text-sm text-gray-500">
              {filteredProducts.length} of {products.length} products
            </p>
          </div>

          <div className="w-full lg:max-w-md">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-green-600 text-white"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-green-600 hover:text-green-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <p className="text-5xl">🔍</p>
            <h3 className="mt-4 text-xl font-bold">No products found</h3>
            <p className="mt-2 text-gray-500">
              Try a different search term or category.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
