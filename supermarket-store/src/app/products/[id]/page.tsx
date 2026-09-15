"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/lib/cart-context";

export default function ProductDetailsPage() {
  const params = useParams<{ id: string }>();
  const product = getProductById(params.id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <main className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <div className="mx-auto max-w-3xl px-4 py-24 text-center">
          <p className="text-5xl">🔍</p>
          <h1 className="mt-4 text-2xl font-bold">Product not found</h1>
          <p className="mt-2 text-gray-500">
            We couldn&apos;t find the product you&apos;re looking for.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block rounded-xl bg-green-600 px-6 py-3 font-bold text-white hover:bg-green-700"
          >
            Back to Products
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const isOutOfStock = product.stock <= 0;
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  function handleAddToCart() {
    if (!product) return;
    addToCart(product.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 pt-8 lg:px-8">
        <div className="flex flex-wrap gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-green-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-gray-100">
            <span className="text-[150px]">{product.icon}</span>
          </div>

          <div>
            <p className="font-semibold text-green-600">{product.category}</p>

            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-3 text-gray-500">{product.unit}</p>

            <div className="mt-8 rounded-2xl border bg-gray-50 p-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Retail Price</span>
                <span className="text-2xl font-extrabold">
                  ₦{product.price.toLocaleString()}
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-500">Wholesale Price</span>
                <span className="text-xl font-bold text-green-600">
                  ₦{product.wholesalePrice.toLocaleString()}
                </span>
              </div>

              <div className="mt-3 text-right text-xs text-gray-500">
                Minimum wholesale quantity: {product.wholesaleMinimum} units
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-bold">Product Description</h2>
              <p className="mt-3 leading-7 text-gray-600">
                {product.description}
              </p>
            </div>

            <div className="mt-6">
              {isOutOfStock ? (
                <span className="font-semibold text-red-600">Out of stock</span>
              ) : (
                <span className="font-semibold text-green-600">
                  ✓ In stock ({product.stock} available)
                </span>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="quantity" className="block text-sm font-semibold">
                Quantity
              </label>

              <div className="mt-2 flex w-32 items-center rounded-lg border border-gray-300">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2 text-lg font-bold text-gray-600 hover:text-green-600"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  disabled={isOutOfStock}
                  onChange={(e) =>
                    setQuantity(
                      Math.min(
                        product.stock,
                        Math.max(1, Number(e.target.value) || 1)
                      )
                    )
                  }
                  className="w-full border-0 bg-transparent text-center outline-none"
                />
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((q) => Math.min(product.stock, q + 1))
                  }
                  className="px-3 py-2 text-lg font-bold text-gray-600 hover:text-green-600"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className={`flex-1 rounded-xl px-6 py-4 font-bold text-white transition disabled:cursor-not-allowed disabled:bg-gray-300 ${
                  added ? "bg-green-800" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {isOutOfStock ? "Out of Stock" : added ? "Added to Cart ✓" : "Add to Cart"}
              </button>

              <Link
                href="/cart"
                className="flex-1 rounded-xl border border-gray-300 px-6 py-4 text-center font-bold transition hover:border-green-600 hover:text-green-600"
              >
                View Cart
              </Link>
            </div>

            <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-5">
              <h3 className="font-bold text-green-800">Buying in bulk?</h3>
              <p className="mt-2 text-sm leading-6 text-green-700">
                Get our wholesale price when you meet the minimum quantity
                requirement.
              </p>
              <Link
                href="/wholesale"
                className="mt-3 inline-block text-sm font-bold text-green-700 hover:underline"
              >
                Learn about wholesale →
              </Link>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold">You may also like</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
