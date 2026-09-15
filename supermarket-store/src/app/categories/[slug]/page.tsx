"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categoryList } from "@/data/products";

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function CategoryDetailPage() {
  const params = useParams<{ slug: string }>();
  const category = categoryList.find((c) => slugify(c) === params.slug);

  if (!category) {
    return (
      <main className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <p className="text-5xl">🔍</p>
          <h1 className="mt-4 text-2xl font-bold">Category not found</h1>
          <Link
            href="/categories"
            className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
          >
            Back to Categories
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const categoryProducts = products.filter((p) => p.category === category);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">
        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <Link href="/categories" className="hover:text-green-600">Categories</Link>
          <span>/</span>
          <span className="text-gray-900">{category}</span>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <h1 className="text-3xl font-extrabold sm:text-4xl">{category}</h1>
        <p className="mt-2 text-gray-500">
          {categoryProducts.length} product
          {categoryProducts.length !== 1 ? "s" : ""} in this category
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
